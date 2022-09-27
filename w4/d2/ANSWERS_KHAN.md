# Relational queries in SQL

## Exercises

### Bobby's Hobbies

```sql
-- Part 1
INSERT INTO persons (name, age) VALUES ('Arthur', 31);

INSERT INTO hobbies (person_id, name) VALUES (6, "running");

-- Part 2
SELECT persons.name, hobbies.name
FROM persons
JOIN hobbies
ON persons.id = hobbies.person_id

-- Part 3
SELECT persons.name, hobbies.name
FROM persons
JOIN hobbies
ON persons.id = hobbies.person_id
WHERE persons.name = 'Bobby McBobbyFace';
```

### Customer's orders

```sql
-- Part 1
SELECT customers.name, customers.email, orders.item, orders.price
FROM customers
LEFT OUTER JOIN orders
ON customers.id = orders.customer_id;

-- Part 2

```
