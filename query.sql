DROP TABLE Pokemon;

CREATE TABLE Pokemon (
	Name VARCHAR,
	Stamina INT,
	ATK INT,
	DEF INT,
	Capture_Rate DECIMAL,
	Flee_Rate DECIMAL,
	Spawn_Chance DECIMAL,
	Primary_Skill VARCHAR,
	Secondary_Skill VARCHAR,
	CP INT
);

SELECT * FROM Pokemon;

DROP TABLE SanFran;

CREATE TABLE SanFran (
	ID INT,
	Name VARCHAR,
	Latitude DECIMAL,
	Longitude DECIMAL
);

SELECT * FROM SanFran;