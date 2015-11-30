CREATE TABLE IF NOT EXISTS ballot
(
Lock char(1) not null DEFAULT 'X',
title VARCHAR(255),
candidates VARCHAR(255),
constraint PK_ballot PRIMARY KEY (Lock),
constraint CK_ballot_Locked CHECK (Lock='X')
);

INSERT INTO ballot
VALUES ('X', 'position', 'Name1,Name2,Name3')