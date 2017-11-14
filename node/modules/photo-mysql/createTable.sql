
CREATE TABLE baby_photo_info
(
    id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
    fileName VARCHAR(4096) NOT NULL,
    hashId VARCHAR(128) NOT NULL,
    model VARCHAR(255),
    CreateDate DATETIME,
    size VARCHAR(255),
    ISO INT,
    gps VARCHAR(4096),
    updateDate DATETIME default CURRENT_TIMESTAMP

);

#insert
insert into baby_photo_info(
    hashId, 
    model,
    CreateDate,
    size,
    ISO
    #gps,
    #updateDate
) values(
    'uu0013dsfaf',
    'iphone6',
    
    str_to_date("2017:08:31 08:22:53", "%Y:%m:%d %H:%i:%s"),
    '800x600',
    800
    
);


insert into baby_photo_info(
    hashId, 
    model,
    
    size,
    ISO
    gps,
    updateDate
) values(
    'uu001333dsfaf',
    'iphone6',
    
    
    '800x600',
    800
    
);
