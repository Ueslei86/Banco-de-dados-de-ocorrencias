sql
CREATE TABLE vitima (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    idade INTEGER,
    genero TEXT
);

CREATE TABLE ocorrencia (
    id INTEGER PRIMARY KEY,
    descricao TEXT,
    endereco TEXT,
    vitima INTEGER,
    houve_obito INTEGER,
    FOREIGN KEY (vitima) REFERENCES vitima(id)
);

INSERT INTO vitima (nome, idade, genero) VALUES
    ('Maria', 25, 'Feminino'),
    ('João', 30, 'Masculino'),
    ('Mariana', 35, 'Feminino');

INSERT INTO ocorrencia (descricao, endereco, vitima, houve_obito) VALUES
    ('Assalto', 'Rua A, 123', 1, 0),
    ('Acidente de carro', 'Rua B, 456', 1, 1),
    ('Assalto', 'Rua C, 789', 2, 0),
    ('Acidente doméstico', 'Rua D, 1011', 2, 0),
    ('Assalto', 'Rua E, 1213', 3, 0),
    ('Agressão', 'Rua F, 1415', 3, 1);


Agora vamos às consultas solicitadas:

1. Recuperar todas as vítimas cuja idade esteja entre uma faixa de idade (idade mínima e idade máxima):

sql
SELECT * FROM vitima WHERE idade BETWEEN 26 AND 34;


Essa consulta retornará apenas o João, já que sua idade é 30 e se encontra entre os valores 26 e 34.

2. Recuperar todas as ocorrências com vítimas do gênero feminino onde houve óbito:

sql
SELECT vitima.nome, ocorrencia.descricao, ocorrencia.endereco FROM vitima
INNER JOIN ocorrencia ON vitima.id = ocorrencia.vitima
WHERE vitima.genero = 'Feminino' AND ocorrencia.houve_obito = 1;


Essa consulta irá recuperar apenas a ocorrência da Maria, já que ela é a única vítima do gênero feminino e que teve óbito em uma das ocorrências.

3. Recuperar todas as vítimas que tiveram ocorrências relacionadas a elas em um determinado endereço, onde apenas parte do endereço deve ser informado (ignorando maiúsculas e minúsculas):

sql
SELECT DISTINCT vitima.* FROM vitima
INNER JOIN ocorrencia ON vitima.id = ocorrencia.vitima
WHERE LOWER(ocorrencia.endereco) LIKE '%rua a%';


Essa consulta irá recuperar a Maria, já que uma das ocorrências está relacionada a ela e ocorreu na "Rua A, 123". Note que utilizei a função LOWER para deixar a pesquisa por parte do endereço case-insensitive, ou seja, ignorando maiúsculas e minúsculas.