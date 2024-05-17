\c legacyvault;

CREATE TABLE notes (
    id varchar(255) PRIMARY KEY,
    ErrorTitle varchar(255) NOT NULL,
    language varchar(255) NOT NULL,
    ErrorDetails varchar(255) NOT NULL,
    BeforeCode varchar(255) NOT NULL,
    ErrorReason varchar(255) NOT NULL,
    SolutionDetails varchar(255) NOT NULL,
    AfterCode varchar(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO notes (id, ErrorTitle, language, ErrorDetails, BeforeCode, ErrorReason, SolutionDetails, AfterCode) VALUES ('user_01HXG2576VJN45302SS2ZPS73G', 'Uncaught SyntaxError: Missing initializer in const declaration', 'javascript', 'このエラーは、イニシャライザ（定数に代入する値）を持たずに定数を宣言しようとしたときに発生する。', 'const a;', 'この例では、代入する値を指定せずにaという定数を宣言しようとしている。この結果、エラー・メッセージUncaught SyntaxError： const 宣言にイニシャライザがありません。', 'このエラーを解決するには、定数を宣言する際にイニシャライザー（定数に代入する値）を指定する必要がある。', 'const a = 10;');