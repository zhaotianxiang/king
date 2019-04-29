# King datavases

## Table describe

* 1. user

```sql
create table user(
    id integer not null,
    password char(32) not null,
    name varchar(10) not null,
    level integer not null,
    money integer not null,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
> 备注： mysql 5.0+, varchar(50) 数字、字母、汉字（每个汉字3字节）都可以存放50个.
> 

```
insert into user(id, password, name, level, money) values('904001993','aini1314','天昭瑞祥','倔强青铜','9999999');

```


* 2. hero

```sql
create table hero(
    id integer auto_increment not null,
    name varchar(10) not null,
    profession varchar(10) not null,
    gender varchar(10) not null,
    price integer not null,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 
```
> Insert query

```
insert into hero(name, profession, gender, price) values('鲁班','射手','男','6300');

```

* 3. skin

```sql
create table skin(
    id integer auto_increment not null,
    name varchar(10) not null,
    type varchar(10) not null,
    price integer not null,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 
```
> Insert query

```
insert into skin(name, type, price) values('仲夏夜之梦', '传说', '163');

```