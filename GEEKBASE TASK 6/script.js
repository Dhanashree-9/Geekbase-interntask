<script>
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(response => response.json())
            .then(data => {
                let rows = '';
                data.forEach(product => {
                    rows += `<tr>
                               
                                <td>${product.title}</td> 
                                <td>${product.price}</td> 
                                <td>${product.description}</td> 
                                <td>${product.category}</td> 
                                <td><img src="${product.image}" alt="${product.title}" width="80"></td>
                                <td><ul>
                                    <li>RATE: ${product.rating.rate}</li>
                                    <li>Count: ${product.rating.count}</li>
                                </ul></td> 
                            </tr>`;
                });
                document.getElementById('tableRows').innerHTML = rows;
            })
            .catch(error => console.log(error));
    </script>