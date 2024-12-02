import bcrypt
import json
import os

FILE_NAME = "user_data.json"


def load_from_file():
    """Load user data from the JSON file if it exists, or return an empty dictionary."""
    if not os.path.exists(FILE_NAME):
        return {}
    try:
        with open(FILE_NAME, "r") as file:
            content = file.read().strip()
            if not content:  # Handle empty file
                return {}
            return json.loads(content)
    except json.JSONDecodeError:
        return {}


def save_to_file(data):
    """Save the entire user data dictionary to the JSON file."""
    with open(FILE_NAME, "w") as file:
        json.dump(data, file, indent=4)
    print(f"User data saved to {FILE_NAME}.")


def register_user():
    """Handle user registration."""
    email = input("Enter your email: ").strip()
    if not email:
        raise ValueError("Email cannot be empty.")

    password = input("Enter your password: ").strip()
    if not password:
        raise ValueError("Password cannot be empty.")

    confirm_password = input("Confirm your password: ").strip()
    if password != confirm_password:
        raise ValueError("Passwords do not match.")

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Load existing data and check for duplicate email
    data = load_from_file()
    if email in data:
        raise ValueError("Email is already registered.")

    # Append the new user to the data
    data[email] = hashed_password.decode('utf-8')
    save_to_file(data)
    print("Registration successful.")


def login_user():
    """Handle user login."""
    data = load_from_file()
    if not data:
        raise ValueError("No registered users found. Please register first.")

    email = input("Enter your email: ").strip()
    if email not in data:
        raise ValueError("Email not found.")

    password = input("Enter your password: ").strip()
    if not password:
        raise ValueError("Password cannot be empty.")

    stored_hash = data[email].encode('utf-8')
    if bcrypt.checkpw(password.encode('utf-8'), stored_hash):
        print("Login successful.")
        return True
    else:
        print("Invalid password.")
        return False


def main():
    """Main function to handle user interactions."""
    while True:
        print("\n=== Main Menu ===")
        print("1. Register")
        print("2. Login")
        print("3. Exit")

        choice = input("Choose an option: ").strip()
        if choice == "1":
            try:
                print("\n=== Register ===")
                register_user()
            except ValueError as e:
                print(f"Error: {e}")
        elif choice == "2":
            try:
                print("\n=== Login ===")
                if login_user():
                    break  # Exit the loop after a successful login
            except ValueError as e:
                print(f"Error: {e}")
        elif choice == "3":
            print("Exiting the program. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")


if __name__ == "__main__":
    main()
