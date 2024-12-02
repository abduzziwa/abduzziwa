The code here is for exercise of hashing a password. 
We all know what hashing is but to simply explain to you hashing is the way to store a password in an encrypted way.

When a user enter a password we run it into a hash function that adds a layer of encryption to that password
With the hashed password then the password is not stored in clear Text for everyone to know in the database.
But when we use a hash passwords that are the same are easy to identify and when a hacker accesses out database he can probably guess the password.

Thats where a salting comes in the salting makes add a layer of security that makes it hard to know what the actual password is. Even if the the users have the same password the (salt + hash) in the database do not look the same at all.

EXERCISE:

In this code i was asked to salt and hash a password and am going to use [PYTHON, bcrypt]
Bcrypt is a module in python that we gonna use to help us hash the password.

In out main.py file we have multiple functions:

1. load_from_file()
2. Save_to_file(data)
3. register_user()
4. login_user()
5. main

The "load_from_file()" function checks if the file exists in the path.
If the file doesn't exist in the path the file is created on registering the first user.


The "save_to_file(data)" function opens the file in write mode and dumps data/ appends data to a file and then gives a confirmation in the console that the user data was save to the file

The "register_user()" function as the name say it takes input values from the user ( email and password). It asks for confirmation of the password as the third input and this is the function also responsible for hashing password with the help of the bcrypt module
This same function also checks the email already exists in the file so that it can inform the user user via the output on the console that the email already exists

The "login_user()" function asks for user inputs about the exiting data. If the user fills in the correct inputs the user is the informed via the console that the login as successful or not

The "main()" function is the one that is responsible for combining all those functions together to them work.
It has a while loop and options for users to choose whether they want to login or register or even exit.









