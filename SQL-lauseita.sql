-- Select rows from a Table or View 'TableOrViewName' in schema 'SchemaName'
SELECT e.empno, e.ename, d.deptno, d.loc, d.dname 
FROM emp e, dept d
GO
-- Tuloksena 14 emp-riviä x 4 dept-riviä = 56 riviä!
-- Eli älä käytä tätä cross joinia turhaan! 
-- Lisää WHERE-lause pienentäämään rivien määrää,
-- tai JOIN ON-lause!

SELECT e.empno, e.ename, d.deptno, d.loc, d.dname 
FROM emp e, dept d
WHERE e.deptno = d.deptno
GO

SELECT e.empno, e.ename, d.deptno, d.loc, d.dname 
FROM emp e JOIN dept d ON e.deptno = d.deptno
GO

SELECT deptno, ename, job, sal, comm
FROM emp
WHERE sal > (SELECT AVG(sal) FROM emp)
GO

SELECT deptno, ename, job, sal, comm, (SELECT AVG(sal) FROM emp) AS [average]
FROM emp
WHERE sal > (SELECT AVG(sal) FROM emp)
GO

DECLARE @a FLOAT
SELECT @a = (SELECT AVG(sal) FROM emp)
SELECT ename, CAST(sal AS VARCHAR) + '>' + CAST(@a AS VARCHAR)
FROM emp
WHERE sal > @a

SELECT x.deptno, x.ename, x.sal
FROM emp x
WHERE x.sal > (SELECT AVG(y.sal) FROM emp y WHERE y.deptno = x.deptno)
GO

-- Koostefunktio on aina wrapattava Selectin kanssa sulkeisiin (paitsi tietty selectissä itsessään, jos siellä ei ole muuta)
SELECT x.deptno, x.ename, x.sal, 
(SELECT AVG(z.sal) FROM emp z WHERE z.deptno = x.deptno),
(SELECT d.dname FROM dept d WHERE d.deptno = x.deptno)
FROM emp x
WHERE x.sal > (SELECT AVG(y.sal) FROM emp y WHERE y.deptno = x.deptno)
GO

-- Kaikki esimiehet
SELECT a.empno, a.ename, a.job
FROM emp a
WHERE a.empno in (SELECT b.mgr FROM emp b)
GO

-- Kaikki työntekijät ja heidän esimiehensä
SELECT x.empno AS [Työntekijän nro], x.ename AS [Työntekijä], x.job AS [Työntekijän titteli],
y.empno AS [Esimiehen nro], y.ename AS [Esimies]
FROM emp x LEFT OUTER JOIN emp y ON x.mgr = y.empno
-- Left outer join näyttää myös ne x-taulun tiedot, joilla ei ole esimiestä (eli x.mgr = null),
-- inner join ei näytä työntekijöitä, joilla ei ole esimiestä