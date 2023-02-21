# MD5 hash generator algorithm

### Theory:- MD-5 Algorithm 
- MD 5 is Message digest 5 hashing algorithm
- It gives fix 32 character long 128 bit output

It has 5 major steps
1) Adding padding bits to the input:-
  Standard formula => Input + Padding bit = size * i -64

2) Append length:-
  Appending length of input to the input value

3) Initialize MD buffer:-
  Four standard buffer with fix value.
  Standard name suggested (a,b,c,d)

4) Processing Block:-
  There are Four processing block (f,g,h,i)
  Function of F => (b AND c) OR (NOT b AND d)
  Function of G => (b AND c) OR (c AND NOT D)
  Function of H => b XOR c XOR D
  Function of I => c XOR (b OR NOT D)

5) Output as Message Digest

### Process Block Diagram
![image](https://user-images.githubusercontent.com/122250819/220319560-8894448e-6829-400e-8d47-599c9c3ceff5.png)


### My Output:-
![Screenshot from 2023-02-21 15-59-39](https://user-images.githubusercontent.com/122250819/220319874-f0229756-131c-4f84-98d8-c2eb6bf7efda.png)
