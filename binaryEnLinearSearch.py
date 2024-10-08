import ast
import datetime
import time


def SearchAlgorithm():
    choice = input("Is your Array Sorted? (Y/N) ").strip().upper()
    if choice == "Y":
        print('Binary Search is the best option..')
        print("-----------------------------------------------------------------")
        array_input = input("Insert (Copy & paste) your Array including the []: ")
        target_input = input("Target to be searched: ")

        try:
            array = ast.literal_eval(array_input)
            target = ast.literal_eval(target_input)
        except:
            return "Invalid input. Please make sure your array is in the correct format."

        def BinarySearch(Array, Target):
            Start = 0
            End = len(Array) - 1
            start_time = time.perf_counter()
            if Array[Start] == Target:
                end_time = time.perf_counter()
                time_taken = (end_time - start_time) * 1_000_000
                print(f"time taken:{time_taken:.2f} microseconds")
                return f'Found {Target} at index {Start}'
            if Array[End] == Target:
                end_time = time.perf_counter()
                time_taken = (end_time - start_time) * 1_000_000
                print(f"time taken:{time_taken:.2f} microseconds")
                return f'Found {Target} at index {End}'

            while Start <= End:
                Middle = (Start + End) // 2
                if Array[Middle] == Target:
                    end_time = time.perf_counter()
                    time_taken = (end_time - start_time) * 1_000_000
                    print(f"time taken:{time_taken:.2f} microseconds")
                    return f'Found {Target} at index {Middle}'
                elif Array[Middle] < Target:
                    Start = Middle + 1
                else:
                    End = Middle - 1

            end_time = time.perf_counter()
            time_taken = (end_time - start_time) * 1_000_000
            print(f"time taken:{time_taken:.2f} microseconds")
            return f'{Target} not found in the array'

        return BinarySearch(array, target)

    elif choice == "N":
        print("Linear Search is the best option..")
        print("-----------------------------------------------------------------")
        array_input = input("Insert (Copy & paste) your Array including the []: ")
        target_input = input("Target to be searched: ")

        try:
            array = ast.literal_eval(array_input)
            target = ast.literal_eval(target_input)
        except:
            return "Invalid input. Please make sure your array is in the correct format."

        def LinearSearch(Array, Target):
            start_time = time.perf_counter()
            for i, value in enumerate(Array):
                if value == Target:
                    end_time = time.perf_counter()
                    time_taken = (end_time - start_time) * 1_000_000
                    print(f"time taken:{time_taken:.2f} microseconds")
                    return f'Found {Target} at index {i}'
            end_time = time.perf_counter()
            time_taken = (end_time - start_time) * 1_000_000
            print(f"time taken:{time_taken:.2f} microseconds")
            return f'{Target} not found in the array'

        return LinearSearch(array, target)

    else:
        return "Invalid choice. Please enter 'Y' or 'N'."


search = SearchAlgorithm()
print(search)
print("-----------------------------------------------------------------")