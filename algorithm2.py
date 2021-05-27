def algorithm(minimum, maximum, interval):

  i = 1

  if (maximum - minimum) % interval == 0:
    n = (maximum - minimum) / interval
    theSum = 0
    while i <= n:
      theSum = theSum + minimum
      minimum = minimum + interval
      i = i + 1

    print(theSum)

  else:
   print("Invalid interval")


getMin = int(input("Enter minimum: "))
getMax = int(input("Enter maximum: "))
getInterval = int(input("Enter interval: "))

algorithm(getMin, getMax, getInterval)