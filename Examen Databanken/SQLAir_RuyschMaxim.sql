-- OEF1
Drop database SQLAir_RuyschMaxim;
CREATE DATABASE SQLAir_RuyschMaxim;
use SQLAir_RuyschMaxim;

CREATE TABLE Luchtvaartmaatschappij(
id_Luchtvaartmaatschappij int AUTO_INCREMENT PRIMARY KEY,
    Naam varchar(255)
);
CREATE TABLE Luchthaven(
id_Luchthaven int AUTO_INCREMENT PRIMARY KEY,
    Naam varchar(255),
    IATACode varchar(5)
);

CREATE TABLE Land(
id_Land int AUTO_INCREMENT PRIMARY KEY,
    Naam varchar(255)
);
CREATE TABLE Passagier(
id_Passagier int AUTO_INCREMENT PRIMARY KEY,
    Naam varchar(255),
    Leeftijd int,
    Land_id int,
    Geslacht char,
    FOREIGN KEY (Land_id) REFERENCES Land (id_Land)
);
CREATE TABLE Vliegtuig(
id_Vliegtuig int AUTO_INCREMENT PRIMARY KEY,
    Naam varchar(255)
);
CREATE TABLE Vlucht(
id_Vlucht int AUTO_INCREMENT PRIMARY KEY,
    Vluchtnummer varchar(255),
    Vertrek datetime,
    Aankomst datetime,
    Vertrekluchthaven_id int,
    Aankomstluchthaven_id int,
    FOREIGN KEY (vertrekluchthaven_id) REFERENCES Luchthaven (id_Luchthaven),
    FOREIGN KEY (aankomstluchthaven_id) REFERENCES Luchthaven (id_Luchthaven)
);
-- OEF2
CREATE TABLE Passagier_Vlucht(
id_Passagier int,
id_Vlucht int,
 FOREIGN KEY (id_Vlucht) REFERENCES Vlucht (id_Vlucht),
    FOREIGN KEY (id_Vlucht) REFERENCES Passagier (id_Passagier)
);
-- OEF3
INSERT INTO Land 
VALUES  (1, 'belgië'),
 (2, 'nederland'),
 (3, 'uk'),
 (4, 'usa'),
 (5, 'spanje'),
 (6, 'turkije'),
 (7, 'italië'),
 (8, 'griekenland'),
 (9, 'duitsland'),
 (10, 'oostenrijk');

INSERT INTO Luchthaven 
VALUES (1, 'Brussels', 'BRU'),
 (2, 'Eindhoven', 'EIN'),
 (3, 'London Heathrow', 'LHR'),
 (4, 'Madrid', 'MAD'),
 (5, 'Antalya', 'AYT'),
 (6, 'Helsinki', 'HEL');
 
INSERT INTO Luchtvaartmaatschappij 
VALUES (1, 'SN Brussels'),
(2, 'American Airlines'),
(3, 'Qantas'),
(4, 'Ryanair'),
(5, 'KLM'),
(6, 'Delta'),
(7, 'British Airways');

INSERT INTO Vliegtuig 
VALUES (1, 'B-737'),
 (2, 'B-767'),
 (3, 'B-747');
 
 INSERT INTO Passagier 
VALUES  (1, 'Hermans', 30, 2, 'V'),
 (2, 'Jones', 45, 4, 'M'),
 (3, 'Peters', 65, 2, 'V'),
 (4, 'James', 15, 3, 'M'),
 (5, 'Dickens', 36, 5, 'V'),
 (6, 'Eltorro', 26, 5, 'M'),
 (7, 'Casala', 39, 5, 'V'),
 (8, 'Frederickx', 26, 1, 'M'),
 (9, 'De Ridder', 35, 2, 'V'),
 (10, 'De Ridder', 34, 2, 'M'),
 (11, 'De Ridder', 29, 2, 'M'),
 (12, 'Lockhart', 56, 4, 'V'),
 (13, 'Brown', 75, 4, 'V'),
 (14, 'Parker', 35, 3, 'V'),
 (15, 'Eaton', 19, 4, 'M');
 
 INSERT INTO Vlucht
VALUES (1, 'SN3719', '2020-01-06 07:35:00', '2020-01-06 10:05:00', 4, 3),
 (2, 'SN5253', '2020-01-06 08:15:00', '2020-01-06 10:30:00', 2, 4),
 (3, 'SN5255', '2020-01-06 11:05:00', '2020-01-06 13:20:00', 1, 3),
 (4, 'SN5257', '2020-01-06 12:35:00', '2020-01-06 14:50:00', 1, 4),
 (5, 'SN3727', '2020-01-06 14:40:00', '2020-01-06 17:10:00', 1, 4),
 (6, 'SN5261', '2020-01-07 16:05:00', '2020-01-07 18:20:00', 4, 1),
 (7, 'SN3719', '2020-01-08 07:35:00', '2020-01-08 10:05:00', 2, 4),
 (8, 'SN5253', '2020-01-08 08:15:00', '2020-01-08 10:30:00', 4, 3),
 (9, 'SN5255', '2020-01-09 11:05:00', '2020-01-09 13:20:00', 1, 4),
 (10, 'SN5257', '2020-01-16 12:35:00', '2020-01-16 14:50:00', 1, 4),
 (11, 'SN3727', '2020-01-26 14:40:00', '2020-01-26 17:10:00', 3, 4),
 (12, 'BA8731', '2020-01-06 07:00:00', '2020-01-06 07:35:00', 4, 3),
 (13, 'BA8731', '2020-01-07 07:00:00', '2020-01-07 07:35:00', 3, 2),
 (14, 'BA8733', '2020-01-07 11:45:00', '2020-01-07 12:25:00', 1, 4),
 (15, 'BA8735', '2020-01-09 18:10:00', '2020-01-09 18:50:00', 4, 1);
 INSERT INTO Passagier_Vlucht 
VALUES  (2, 1),
 (3, 1),
 (4, 1),
 (5, 2),
 (6, 3),
 (7, 4),
 (8, 5),
 (9, 6),
 (10, 7),
 (11, 8),
 (13, 8),
 (14, 8),
 (15, 8),
 (12, 9),
 (1, 10),
 (2, 10),
 (3, 10),
 (4, 10);
 
 -- oef4 +5
 ALTER TABLE Vlucht
 ADD Luchtvaartmaatschappij_id int,
 ADD Vliegtuid_id int,
 ADD FOREIGN KEY (Luchtvaartmaatschappij_id) REFERENCES Luchtvaartmaatschappij (id_Luchtvaartmaatschappij),
 ADD FOREIGN KEY (Vliegtuid_id) REFERENCES Vliegtuig (id_Vliegtuig);
 
 UPDATE Vlucht
 SET Vliegtuid_id =1
 WHERE id_Vlucht BETWEEN 1 AND 5;
 UPDATE Vlucht
 SET Vliegtuid_id =2
 WHERE id_Vlucht BETWEEN 6 AND 10;
 UPDATE Vlucht
 SET Vliegtuid_id =3
 WHERE id_Vlucht BETWEEN 11 AND 15;
 
 UPDATE Vlucht
 SET Luchtvaartmaatschappij_id =(SELECT id_Luchtvaartmaatschappij FROM Luchtvaartmaatschappij WHERE naam ='SN Brussels')
 WHERE Vluchtnummer LIKE 'SN%';
  UPDATE Vlucht
 SET Luchtvaartmaatschappij_id =(SELECT id_Luchtvaartmaatschappij FROM Luchtvaartmaatschappij WHERE naam ='British Airways')
 WHERE Vluchtnummer LIKE 'BA%';
 
 -- OEF6
 -- A 
 SELECT p.naam
 FROM passagier_vlucht pv
 INNER JOIN Passagier p ON p.id_Passagier = pv.id_Passagier
 INNER JOIN Vlucht v ON pv.id_Vlucht = v.id_Vlucht
 WHERE v.Vluchtnummer ='SN5253'
 ORDER BY p.naam DESC;
 
 -- B
  SELECT DISTINCT v.*
 FROM passagier_vlucht pv
 INNER JOIN Passagier p ON p.id_Passagier = pv.id_Passagier
 INNER JOIN Vlucht v ON pv.id_Vlucht = v.id_Vlucht
 INNER JOIN Land l ON p.Land_id = l.id_Land
 WHERE l.Naam ='USA'
 ORDER BY v.id_Vlucht;
 
 -- C 
 SELECT lvm.Naam, COUNT(v.id_Vlucht)
 FROM Luchtvaartmaatschappij lvm
 INNER JOIN Vlucht v ON lvm.id_Luchtvaartmaatschappij = v.Luchtvaartmaatschappij_id
 GROUP BY lvm.Naam;
 
 -- D 
 SELECT lvm.Naam, COUNT(v.id_Vlucht)
 FROM Luchtvaartmaatschappij lvm
 INNER JOIN Vlucht v ON lvm.id_Luchtvaartmaatschappij = v.Luchtvaartmaatschappij_id
 GROUP BY lvm.Naam
 HAVING COUNT(v.id_Vlucht) >5;
 
 -- E
  SELECT lvm.Naam, COUNT(v.id_Vlucht)
 FROM Luchtvaartmaatschappij lvm
 LEFT JOIN Vlucht v ON lvm.id_Luchtvaartmaatschappij = v.Luchtvaartmaatschappij_id
 GROUP BY lvm.Naam;
 
 -- F
 SELECT lh.*
 FROM Luchthaven lh
 LEFT OUTER JOIN Vlucht v ON v.Aankomstluchthaven_id = lh.id_Luchthaven
 LEFT OUTER JOIN Vlucht v2 ON v2.Vertrekluchthaven_id = lh.id_Luchthaven
 GROUP BY lh.Naam
HAVING COUNT(v.id_Vlucht) =0 AND COUNT(v2.id_Vlucht) =0;

-- G 
SELECT l.Naam, p.Geslacht, COUNT(p.id_Passagier)
FROM Passagier p
INNER JOIN Land l ON l.id_Land = p.Land_id
GROUP BY l.Naam, p.Geslacht
ORDER BY l.Naam;

-- H FOUT 0 ontbreekt.
SELECT  DISTINCT(p.id_Passagier), p.Naam, COUNT(p.id_Passagier)
FROM Passagier p
LEFT JOIN Passagier_Vlucht pv ON p.id_Passagier = pv.id_Passagier
INNER JOIN Vlucht v ON pv.id_Vlucht = v.id_Vlucht
LEFT JOIN Luchthaven lh ON v.Aankomstluchthaven_id = lh.id_Luchthaven
LEFT JOIN Luchthaven lh2 ON v.Vertrekluchthaven_id = lh2.id_Luchthaven
WHERE lh.Naam = 'Madrid' OR lh2.Naam = 'Madrid'
GROUP BY p.id_Passagier
ORDER BY p.id_Passagier;


-- I 
 SELECT sub.*
 FROM ( SELECT v1.*
 FROM Vlucht v1
 INNER JOIN Luchthaven lh1 ON lh1.id_Luchthaven = v1.Vertrekluchthaven_id
 WHERE UPPER(lh1.IATACode) NOT LIKE 'EIN%' GROUP BY lh1.Naam) AS sub
 INNER JOIN Luchthaven lh ON lh.id_Luchthaven = sub.Vertrekluchthaven_id
 WHERE  UPPER(lh.IATACode) LIKE 'BRU%';

-- J
INSERT INTO Passagier_Vlucht
SELECT pv.id_Passagier,15 FROM Passagier_Vlucht pv WHERE pv.id_Vlucht =8;

-- OEF7
CREATE INDEX vluchtindex ON Vlucht(Vluchtnummer);

-- OEF8
SHOW INDEXES FROM Vlucht;

-- OEF9
CREATE VIEW v_vlucht AS
SELECT UPPER(lvm.Naam), UPPER(v.Vluchtnummer), v.Vertrek
FROM Vlucht v
INNER JOIN Luchtvaartmaatschappij lvm ON lvm.id_Luchtvaartmaatschappij = v.Luchtvaartmaatschappij_id
ORDER BY v.Vertrek DESC;

select * from v_vlucht;

-- OEF10
CREATE TABLE Airbonus(
passagier_id int,
bonus int
);

drop TRIGGER bonusAddtrigger;
DELIMITER //
CREATE TRIGGER bonusAddtrigger
AFTER INSERT ON Passagier_Vlucht
FOR each row
BEGIN
DECLARE passengerExists int;
SELECT ab.passagier_id INTO passengerExists FROM Airbonus ab WHERE ab.passagier_id=NEW.id_Passagier;
IF passengerExists IS NULL THEN
INSERT INTO Airbonus Values(NEW.id_Passagier,0);
    END IF;  
UPDATE Airbonus
SET Airbonus.bonus = Airbonus.bonus+10
WHERE Airbonus.passagier_id = NEW.id_Passagier;
END
//
DELIMITER ;

drop TRIGGER bonusRemovetrigger;
DELIMITER //
CREATE TRIGGER bonusRemovetrigger
AFTER DELETE ON Passagier_Vlucht
FOR each row
BEGIN
DECLARE passengerExists int;
SELECT ab.passagier_id INTO passengerExists FROM Airbonus ab WHERE ab.passagier_id=OLD.id_Passagier;
IF passengerExists IS NULL THEN
INSERT INTO Airbonus Values(OLD.id_Passagier,0);
    END IF;  
UPDATE Airbonus
SET Airbonus.bonus = Airbonus.bonus-10
WHERE Airbonus.passagier_id = OLD.id_Passagier;
END
//
DELIMITER ;

-- insert INTO Passagier_Vlucht VALUES (4,2);
-- DELETE FROM Passagier_Vlucht pv WHERE  pv.id_passagier=4 AND pv.id_Vlucht=2;
