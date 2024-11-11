//Logging all values in the array 

using System.Reflection.Metadata.Ecma335;

string[] names = {"Peter","Jim","Suzzie","Dan"};

for( int i = 0; i < names.Length; i++)
{
    Console.WriteLine(names[i]);
}

Console.WriteLine("....................................................");
Console.WriteLine("numbers");

int[] ages = { 20, 26, 50, 100 };
int total = 0;
for( int i = 0; i < ages.Length; i++)
{
    total += ages[i];
}

Console.WriteLine(total);

Console.WriteLine(".....................................................");

Console.WriteLine(".....................min-max...................");

Console.WriteLine(ages.Max(x => x));
Console.WriteLine(ages.Min(x => x));

Console.WriteLine("...................reversing.................");

string[] reversed = names.Reverse().ToArray();
for (int i = 0; i < reversed.Length; i++)
{
    Console.WriteLine(reversed[i]);
}

Console.WriteLine("..............Average..................");

int totalNumberOfItems = ages.Length;
int tataladditionOfItems = 0;

for (int i = 0;i < ages.Length ;i++)
{
   totalNumberOfItems += ages[i];
}

int average = totalNumberOfItems / totalNumberOfItems;

Console.WriteLine(average);

Console.WriteLine(".................CheckNames..............");

Console.Write("What name are you searching for:  ");
string searchName = Console.ReadLine();
bool found = false;

for (int i = 0; i < names.Length ; i++)
{
   if (names[i] == searchName)
    {
        found = true;
    }
}

if (found)
{
    Console.WriteLine("Name found........................");
} 
else
{
    Console.WriteLine("Not found");
}





