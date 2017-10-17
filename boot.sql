CREATE TABLE user
(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(255),
    address VARCHAR(255),
    createTime DATE,
    modifyTime DATE
);

