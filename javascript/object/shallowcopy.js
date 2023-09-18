const x={
    a:1,
    b:'name',
    c:{
        name:"sinsha",
        id:123
    }
}

const x1={...x}

x.a=10
x1.c.name="neethu"
console.log("original",x)
console.log("shallow",x1)