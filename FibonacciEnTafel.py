# Fibonnacii Odracht

def fibonacci(n):
    if n <= 0:
        print("Please enter a positive integer.")
        return

    fib_sequence = []
    a, b = 1, 2
    for _ in range(n):
        fib_sequence.append(a)
        a, b = b, a + b
    print(", ".join(map(str, fib_sequence)))


# Tafelkaart opdracht
def multiplication_table(n):
    if n <= 0:
        print("Please enter a positive integer.")
        return

    print("Multiplication Table")
    # Print header row
    print("Tafel" + "\t" + "\t".join(str(i) for i in range(1, n + 1)))

    for i in range(1, n + 1):
        # Print each row
        row = [str(i * j) for j in range(1, n + 1)]
        print(f"{i}\t" + "\t".join(row))


def choose_option():
    print("Choose an option:")
    print("1. Fibonacci sequence")
    print("2. Multiplication table")
    print("3. Exit")
    return int(input("Enter your choice: "))


while True:
    choice = choose_option()
    if choice == 1:
        n = int(input("Enter a positive integer for Fibonacci sequence: "))
        fibonacci(n)
    elif choice == 2:
        n = int(input("Enter a positive integer for the multiplication table: "))
        multiplication_table(n)
    elif choice == 3:
        break
    else:
        print("Invalid choice. Please try again.")
