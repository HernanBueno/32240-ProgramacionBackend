async function redirectToCart() {
    console.log("ENTRA EN EL SCRIPT1")
    const cartId = document.getElementById("cartId").value
    location.href = `http://localhost:8080/api/carts/${cartId}`
    console.log("ENTRA EN EL SCRIPT")
    // await fetch(`http://localhost:8080/api/carts/${cartId}`, {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'}
    // })
}
