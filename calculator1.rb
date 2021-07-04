require 'prime'


puts "Calculator has started"
$memory
$numberArray= Array.new 
$a
$b
$stack=[]


class Command
   def execute
      raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
   end
end


class Addition < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=@numberArray[0]+@numberArray[1]
      puts $a
      calculate()
   end
end

class Substraction < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=@numberArray[0]-@numberArray[1]
    puts $a
    calculate()
   end
end

class Multiplication < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=@numberArray[0]*@numberArray[1]
    puts $a
    calculate()
   end
end

class Division < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      if @numberArray[1] == 0
         puts "Error"
      else
      $a=@numberArray[0]/@numberArray[1]
    puts $a
    calculate()
   end
end
end 

class Modulo < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=@numberArray[0]%(@numberArray[1])
      puts $a
      calculate()
   end
end

class Pow < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=@numberArray[0]**@numberArray[1]
      puts $a
      calculate()
   end
end

class BinSubtraction < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=@numberArray[0]-1
      puts $a
      calculate()
   end
end

class Sqrt < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
$a=@numberArray[0]*@numberArray[0]
puts $a
calculate()
end
end

class Sin < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=Math.sin(@numberArray[0])
      puts $a
      calculate()
end
end

class Cos < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=Math.cos(@numberArray[0])
      puts $a
      calculate()
end
end

class Tg < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=Math.tan(@numberArray[0])
      puts $a
      calculate()
end
end

class Ctg < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=1/Math.tan(@numberArray[0])
      puts $a
      calculate()
end
end

class Exp < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $a=Math.exp(@numberArray[0])
      puts $a
      calculate()
end
end

class Ln < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      if @numberArray[0] <=0
         puts "Error"
      else
       $a=Math.log(@numberArray[0])
       puts $a
       calculate()
    end
end
end

class Fact < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      if @numberArray[0]==0
         $a=1
      else
       $a=(1..@numberArray[0]).inject(:*)
      end
       puts $a
       calculate()
end
end

class MemRead < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      $memory=@numberArray[0]
      calculate()
end
end

class MemWrite < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      if $memory!=nil
         puts $memory
         $a=$memory
         calculate()
          else
             puts $a
             calculate() 
          end
end
end

class StackPush < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
      if(@numberArray[0]!=nil)
         $stack<<@numberArray[0]
            else
               $stack<<$b
            end
         puts $stack[-1]
         calculate()
end
end

class StackPop < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def execute
if($stack[-1]!=nil)
   puts $stack.pop
    else
       puts "Error"
    end
    calculate()
   end
end

class IsPrime < Command
   def initialize(num)
      @num=num
   end
   def execute
      (2..@num).each do |divisor|
         return false if @num%divisor==0
       end
       true
   end
end

class Primes < Command
   def initialize(numberArray)
      @numberArray=numberArray
   end
   def prime?(num)
      (2..num).each do |divisor|
         return false if num%divisor==0
       end
       true
   end
   def execute
      (@numberArray[0].round..@numberArray[1].round).each do |num|
         $stack<<num if num.prime?
      end
         $a=$stack[-1]
         puts $stack[-1]
         calculate()
   end
end

def validation()
   begin
      string=gets.chomp!
      Float(string || '')
      rescue
         puts "Error! Enter a number"
         retry
      end
 end

$operations=Hash[
   "+" => Addition,
   "-" => Substraction,
   "*"=>Multiplication,
   "/"=>Division,
   "--"=>BinSubtraction,
   "**"=>Pow,
   "mod"=>Modulo,
   "sin"=>Sin,
   "cos"=>Cos,
   "tan"=>Tg,
   "ctan"=>Ctg,
   "pop"=>StackPop,
   "push"=>StackPush,
   "exp"=>Exp,
   "ln"=>Ln,
   "fact"=>Fact,
   "read"=>MemRead,
   "write"=>MemWrite,
   "primes"=>Primes
]


def calculate()
   
    if $numberArray.empty?
 firstnum=validation()
 $numberArray<<firstnum.to_f
 $b=firstnum
else
    $numberArray.clear
    $numberArray<<$a
end

 operation=gets.chomp!

 case operation
 when "--"
   $operations["--"].new($numberArray).execute
 when "sqrt"
   $operations["sqrt"].new($numberArray).execute
 when "sin"
   $operations["sin"].new($numberArray).execute
 when "cos"
   $operations["cos"].new($numberArray).execute
 when "tan"
   $operations["tan"].new($numberArray).execute
 when "ctan"
   $operations["ctan"].new($numberArray).execute
 when "exp"
   $operations["exp"].new($numberArray).execute
 when "ln"
   $operations["ln"].new($numberArray).execute
 when "!"
   $operations["fact"].new($numberArray).execute
   when "mw"
      $operations["write"].new($numberArray).execute
      continue
  when "mr"
   $operations["read"].new($numberArray).execute
continue
when "push"
   $operations["push"].new($numberArray).execute
continue
when "pop"
   $operations["pop"].new($numberArray).execute
continue
end

 secondnum=validation()
 $numberArray<<secondnum.to_f
case operation
when "+" 
   $operations["+"].new($numberArray).execute

when "*"
   $operations["*"].new($numberArray).execute
when "-"
   $operations["-"].new($numberArray).execute
when "/"
   $operations["/"].new($numberArray).execute
when "%"
   $operations["mod"].new($numberArray).execute
when "**"
   $operations["**"].new($numberArray).execute
   when "mw"
      $operations["write"].new($numberArray).execute
      continue
  when "mr"
   $operations["read"].new($numberArray).execute
continue
when "push"
   $operations["push"].new($numberArray).execute
continue
when "pop"
   $operations["pop"].new($numberArray).execute
continue
when "primes"
   $operations["primes"].new($numberArray).execute

end

 begin
   calculate()
   raise
   rescue
      puts "Error! Enter either an unary or a binary operation"
      retry
   end
end

calculate()


