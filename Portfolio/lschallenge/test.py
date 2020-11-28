# cody = [1, 2, 3, 4, 5]
#
#
#
# print(cody)
#



arr = [3, 5, 2, -4, 8, 11]




def numFinder(arg, s):
    cache = {}

    solution = []

    for i in range(0, len(arg)):
        for j in range(1, len(arg)):
            if arg[i] + arg[j] == s:
                if arg[i] > arg[j]:
                    solution.append([arg[i], arg[j]])
    return print(solution)


numFinder(arr, 7)
