import { useContext,useState } from "react"
import { useAuthContext } from '../hooks/useAuth'
import { CartContext } from "../context/CartContext"
import { ProductContext } from "../context/ProductContext"
import { useParams, useNavigate } from "react-router-dom"


const ProductPage = () => {
    const {id} = useParams()//id del producto desde la url dinamica
    const {products} = useContext(ProductContext)
    const { autenticated } = useAuthContext()
    const navigate = useNavigate()
    const { addProduct } = useContext(CartContext)
    const placeholderImage = 'https://www.hubspot.com/hs-fs/hubfs/http-error-500-google.webp?width=650&height=462&name=http-error-500-google.webp'
    const [clickedProduct, setClickedProduct] = useState(null);

    const handleClick = (product) => {
        addProduct(product);
        setClickedProduct(product.id)// Se activa el estado clickedProduct al agregar un producto al carrito
        setTimeout(() => {
            setClickedProduct(null)// Se desactiva el estado clickedProduct al pasar 1 segundo
        }, 1000);
    }
    // Resetea el estado de isClicked después de 1/2 segundo
    const handleImageError = (e) => {
        e.target.src = placeholderImage
    }

    const product = products.find(product => product.id === id)
    if (!product) { //existe un rpoducto con este id?
        return (
            <>
            <div className='container text-center py-5'>
                <img src={placeholderImage}
                style={{ height: "500px" }}
                className="rounded mx-auto d-block"
                alt="Even the image was not found :(" 
                 />
                <h1>Product not found</h1> {/* si no existe */}
            </div>
            </>
        )
    }
  return (
    <div className='container text-center'>
            <h1>{product.product_name}</h1>
            <img 
            style={{ height: "500px" }} 
            src={product.image || placeholderImage }
            alt={product.product_name}
            onError={handleImageError}
            />
            <br />
            <h3>{product.description}</h3>
            <br />
            <h3>Price: ${product.price}</h3>
            <br />
            {autenticated ? (
                <>
                <button 
                onClick={() => handleClick(product)} 
                className={`btn ${clickedProduct === product.id ? 'btn-success' : 'btn-primary'}`}>
                    {clickedProduct === product.id ? 'Added to cart' : 'Add to cart'}</button>{/* agrega al carrito el producto */}
                </>
            )
            : (
                <>
                 <button onClick={() => navigate("/login")}>
                    Login or signup to add to cart
                </button>
                </>
            )}
            
        </div>
  )
}

export default ProductPage
