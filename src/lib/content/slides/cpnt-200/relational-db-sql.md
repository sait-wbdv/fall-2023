
# Relational Databases and SQL

---

## Terminology
<dl>
  <dt>Relational Database</dt>
  <dd>Data organized into one or more tables of columns and rows, with a unique key identifying each row.</dd>
  <dt>Relation</dt>
  <dd>A relationship between two columns in one or more tables. Relations can be one-to-one, one-to-many or many-to-many.</dd>
  <dt>SQL</dt>
  <dd>Structured query language (SQL) is a standard language for database creation and manipulation.</dd>
</dl>

---

## Relational Databases
### Fancy Google Sheets

---

### Sheet names &rarr; Entities (tables)
![Sheet names are entities](/images/db/table-names.png)

Entities (table names) are the nouns that are described by the columns in a table.

---

### Columns &rarr; Attributes
![Google Sheet column](/images/db/columns.png)

Attributes describe the individual aspects of a particular Entity and are usually just called columns.

---

### Rows &rarr; Records
![Google Sheet row](/images/db/rows.png)

Records are the actual data that are described by the data in each column. These are often called rows.

---

### Cell Format &rarr; Data Type
![Google Sheet cell format menu](/images/db/data-types.png)

Every column has a data type defined when it's created.

---

## Naming conventions
Table and Column names should:
- be lowercase
- use underscores instead of spaces
- be singular instead of plural
- not begin with a number

---

## Constraints
### Added for data integrity

---

### Primary Key
![id column in a Google Sheet](/images/db/primary-key.png)

**Primary keys** uniquely identify each Record in a Table. By convention, the primary key of a table is named **`id`**.

---

### Compound Primary Key
![Two id columns in a table](/images/db/compound-primary-key.png)

A **Compound Primary Key** uniquely defines a table row with a combination of two primary/foreign keys.

By convention, these tables are named by the two joining table names, separated by an underscore.

---

### Foreign Key
![Google Sheet columns containing other table ids](/images/db/foreign-key.png)

**Foreign keys** create a column relationship between two tables. 

By convention, column names with foreign key relationships end in **`_id`**.

---

### Check Constraints
When a column has a limited range of allowed values.

### Not NULL
When a column cannot be empty.

### Unique
When each value in a table column must be unique.

### Default
When a default column value is defined if one is not provided when a row is created or updated.

---

## Relations
### Types of Foreign Key Relationships

---


### One-to-Many
![one-to-one diagram](/images/db/one-to-many.png)

_Entity A_ belongs to one _Entity B_ but _Entity B_ can belong to many _Entity A_.

**Example**: A country can have many cities but a city can only be in one country.

---

### Many-to-Many
![one-to-one diagram](/images/db/many-to-many.png)

_Entity A_ belongs to many _Entity B_ and vice versa.

**Example**: A movie can have many actors and an actor can be in many movies.

---

### One-to-one (rare)
![one-to-one diagram](/images/db/one-to-one.png)

One-to-one relationships are rare but are sometimes used in more advanced "super/subtype" data model architectures.

---

## SQL
### Structured Query Language

---

### Common SQL Commands
The most common SQL statements follow traditional CRUD Operations:

Create &rarr; `INSERT`

Retrieve &rarr; `SELECT`

Update &rarr; `UPDATE`

Delete &rarr; `DELETE`

---

### Create &rarr; `INSERT INTO`
Insert data into all columns of a table:
```sql
INSERT INTO 
  table_name
VALUES 
  (value1, value2, value3, ...); 
```

### Example
Insert data into specific columns of a table:
```sql
INSERT INTO 
  table_name (column1, column2, column3, ...)
VALUES 
  (value1, value2, value3, ...);  
```

---

### Retrieve &rarr; `SELECT`
Select specific columns from all rows from a table:
```sql
SELECT 
  column1, column2, ...
FROM 
  table_name; 
```

### Examples

SELECT first_name, last_name FROM customer
```sql
SELECT first_name, last_name FROM customer;
```

SELECT all columns FROM customer with `*`:
```sql
SELECT * FROM customer;
```

---

### `SELECT` with `WHERE`
Select from specific rows with WHERE
```sql
SELECT 
  column1, column2, ...
FROM 
  table_name 
WHERE
  condition;
```

### Example
Find all fields for anyone with a last name of 'Packe':
```sql
SELECT * FROM customer WHERE last_name = 'Packe';
```
---

### `SELECT` with `ORDER BY`
Order the rows returned with ORDER BY:
```sql
SELECT 
  column1, column2, ...
FROM 
  table_name 
WHERE
  condition;
ORDER BY
  column1, column2 ASC|DESC
```

### Example
Find all customers by last name, starting at Z:
```sql
SELECT id, first_name, last_name FROM customer ORDER BY last_name DESC
```

---

### Update &rarr; `UPDATE`
Update a row using `SET` and `WHERE`:
```sql
UPDATE 
  table_name
SET 
  column1 = value1, column2 = value2, ...
WHERE 
  condition; 
```

### Example
Update the last name of customer `4` to "Marcias":
```sql
UPDATE customer SET last_name = 'Marcias' WHERE id = '4' 
```

---

### Delete &rarr; `DELETE`
Delete rows with `WHERE` (we rarely delete rows in production):
```sql
DELETE FROM 
  table_name 
WHERE 
  condition; 
```

### Example
Delete all records that total more than 1000 (then get fired):

```sql
DELETE FROM rental_invoice WHERE total_amount_payable > 1000; 
```

---

## Further Reading
- [Summary - Relational Database Model](https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl)
<br>
<br>

### Videos
- IBM Technology: [What is a Relational Database?](https://www.youtube.com/watch?v=OqjJjpjDRLc)
- Free Code Camp: [SQL Tutorial - Full Database Course for Beginners](https://www.youtube.com/watch?v=HXV3zeQKqGY)
    - [2:36] - [What is a Database?](https://www.youtube.com/watch?v=HXV3zeQKqGY&t=156s)
    - [23:10] - [Tables & Keys](https://www.youtube.com/watch?v=HXV3zeQKqGY&t=1390s)
    - [43:31] - [SQL Basics](https://www.youtube.com/watch?v=HXV3zeQKqGY&t=2611s)
