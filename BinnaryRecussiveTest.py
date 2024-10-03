import ast


def binary_search(array, target):
    def recc(start, end):
        middle = (start + end) // 2
        if (start < end) and (target != array[middle]):
            return f'{target} not found in the array'
        if array[middle] == target:
            return f'{target} is on index {middle}'
        if array[middle] < target:
            return recc(start + 1, middle - 1)
        else:
            return recc(middle + 1, end - 1)


    return recc(0, len(array) - 1)


arrayToSearch = ast.literal_eval(input("Input a array[] to search : "))
targetToFind = ast.literal_eval(input("Input a target to find : "))
binary_result = binary_search(arrayToSearch, targetToFind)
print('----------------------------------------------')
print(binary_result)
print('----------------------------------------------')
