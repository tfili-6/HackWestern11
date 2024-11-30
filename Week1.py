## --- WEEK 1 LECTURE --- ##
## --- Sept 10 2024

#name = input("what is your name: ")
#print(f"Hello {name}, welcome to Python!")
word = "bob"
wage = 200
print("Your daily wage is", wage)

weekly_wage = 5*wage
print("Your weekly wage is", weekly_wage, "hellllloo")

print("hello" + word + ".")
print("hello %s" % (wage))

#Word Conversion
a = input("Input: ")

a = a.replace("sad" , "happy")
a = a.replace("failed", "passed")

print(a)

#area
length = int(input("What is the length: "))
width = int(input("What is the width: "))

area = length * width
print("The area is", area)