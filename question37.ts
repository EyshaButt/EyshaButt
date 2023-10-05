// Large shirts

function make_Shirt(size: string = "Large",message:
string ="I love typescript"): void {
    console.log(`Size: ${size}, Message: '${message}
    '`)
}

// Large shirt with default message

make_Shirt();// Output: Size: Large, Message: 'I love typescript'

// Medium shirt with default message
make_Shirt("Medium");// Output: Size: Medium, Message: 'I love typescript'

// Custom shirt with a different message and size
makeShirt("Small","Please subscribe typescript insight!");// Output: Size: Small, Message: "Please subscribe typescript insight"



