export function ProductList({ products }) {
    console.log(products)
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Products</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>descripcion</th>
                    <th>precios</th>
                </tr>
                {products.map(i => (
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.description}</td>
                        {i.price.map(i => (
                            <td key={i}>{i.show === true && i.value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}