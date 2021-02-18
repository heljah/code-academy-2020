-- Demokantaan funktio ja CTE-rakenteita
SELECT name, object_id, type_desc
FROM sys.objects
WHERE name LIKE '%emp%'

DECLARE @d INT
DECLARE @o INT
SET @d = DB_ID('Demokanta')
SET @o = OBJECT_ID('testtest')

IF @d IS NULL
    BEGIN
        PRINT 'Ei tietokantaa'
    END
ELSE IF @o IS NULL
    BEGIN
        PRINT 'Ei objektia'
    END
ELSE 
    BEGIN
        SELECT @d, @o
    END
GO

-- Tehdään funktio
IF OBJECT_ID('ListaaAlaisetHH') IS NOT NULL
    DROP FUNCTION ListaaAlaisetHH
GO

CREATE FUNCTION ListaaAlaisetHH (@id AS VARCHAR(10)) RETURNS VARCHAR(100)
AS
    BEGIN
        DECLARE @lista VARCHAR(100)
        SET @lista = ''

        SELECT @lista = @lista + empno + ','
        FROM emp
        WHERE mgr = @id

        IF LEN(@lista) > 0
            BEGIN
                SET @lista = LEFT(@lista, LEN(@lista) -1)
            END

        RETURN @lista
    END
GO

SELECT empno, ename, dbo.ListaaAlaisetHH(empno)
FROM emp

-- Tehdään proseduuri
CREATE PROCEDURE ListaaOsastonPalkatHH @onro INT
AS 
    BEGIN
        SELECT e.empno, e.ename, e.sal, d.dname 
        FROM emp e JOIN dept d ON e.deptno = d.deptno
        WHERE d.deptno = @onro
    END
GO

EXEC ListaaOsastonPalkatHH @onro = 20

-- CTE-rakenne
WITH CTE_EsimiesraporttiHH (ttnumero, ttnimi, amaara, pnro, pnimi) 
AS
(
    SELECT x.empno, x.ename, 
    (SELECT COUNT(*) FROM emp y WHERE x.empno = y.mgr),
    x.mgr,
    (SELECT z.ename FROM emp z WHERE z.empno = x.mgr)
    FROM emp x
)

SELECT ttnumero, ttnimi, amaara, pnro, pnimi 
FROM CTE_EsimiesraporttiHH

GO

-- Toinen CTE-rakenne
WITH HierarkiaHH (ttnumero, ttnimi, pnro, ammatti, hierarkia) 
AS
(
    SELECT a.empno, a.ename, a.mgr, a.job, 1
    FROM emp a
    WHERE a.mgr IS NULL

    UNION ALL
    SELECT r.empno, r.ename, r.mgr, r.job, h.hierarkia + 1
    FROM emp r JOIN HierarkiaHH h ON r.mgr = h.ttnumero
)

SELECT ttnumero, ttnimi, pnro, ammatti, hierarkia 
FROM HierarkiaHH

GO