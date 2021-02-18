-- Suomi Northwindiin liittyviä hakuja

SELECT a.Yritys, tit.Määrä, t.Tilauspäivämäärä, tu.[Englanninkielinen nimi]
FROM Asiakkaat a JOIN Tilaukset t ON a.Asiakastunnus = t.Asiakastunnus
                JOIN Tilaustiedot tit ON t.Tilaustunnus = tit.Tilaustunnus
                JOIN Tuotteet tu ON tit.Tuotetunnus = tu.Tuotetunnus
WHERE tu.[Englanninkielinen nimi] LIKE '%thin%'
GO


-- Distinct parsii tuplat pois
SELECT DISTINCT tr.[Ryhmän nimi], r.Yritys
FROM Rahtaajat r JOIN Tilaukset t ON r.Rahtaajatunnus = t.Rahtaaja
                JOIN Tilaustiedot tit ON t.Tilaustunnus = tit.Tilaustunnus
                JOIN Tuotteet tu ON tit.Tuotetunnus = tu.Tuotetunnus
                JOIN Tuoteryhmät tr ON tu.[Ryhmän tunnus] = tr.[Ryhmän tunnus]
WHERE r.Yritys LIKE '%United%'

CREATE FUNCTION ListaaAlaisetHH (@id AS VARCHAR(10)) RETURNS VARCHAR(100)
AS
    BEGIN
        DECLARE @lista VARCHAR(100)
        SET @lista = ''

        SELECT @lista = @lista + empno + ','
        FROM emp
        WHERE mgr = @id

        RETURN @lista
    END
GO
