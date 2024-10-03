
import './App.css'
import MyComponent from './MyComponent'
import Item from './item'
import Petinfo from './props/Petinfo'
import Service from './props/Service'
import Product from './props/Product'



function App() {


  return (
    <>
   
    {/* <Item title="Akjol" age={15} city="Naryn"></Item>
    <Item title="Kutman" age={16} city="Batken"></Item>
    <Petinfo  name ="Ariet" age={13}  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiEi7kNyO3qT5gpybIiaUDBCTBT2kBj54Mg&s"/>
    <Petinfo name ="Asel" age={21} image="https://media.licdn.com/dms/image/D4E12AQG0hyhZmq0AyQ/article-cover_image-shrink_600_2000/0/1700488940348?e=2147483647&v=beta&t=eZtDe_xSbm65L-mR1tnM8vnfMpM3aWcSe8rw8o7sjSs"/> */}

{/* <Service name="Okurmen" image="https://st-1.akipress.org/cdn-st-0/qec/9/sm-3678.jpg" price={24} completed={true} />

 <Service name="JavaScript" image="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" price={14} completed={false} /> */}
 <Product name="M3 MacBook Pro" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhunWOMJ2gNgTkK8BJdcWSun46cTMriAn2Q&s"  price="1005$"/>
  <Product name="Iphone 15 plus" image="https://images.fonearena.com/blog/wp-content/uploads/2023/10/Apple-iPhone-15-Plus_fonearena-9-1024x705.jpg" price="1225$"/>
  <Product name="Iphone 16 Pro Max" image="https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/3-500x400.jpg" price="125$"/> 
  
  <Product name="Porsche 911 Carrera GTS" image="https://images-porsche.imgix.net/-/media/2B1B53F155074C1591397D78EE530FA4_54F74867AE7F4D2B87128A2C3F761F1D_CZ25W12IX0011-911-carrera-gts-front?w=999&q=85&auto=format" price="125$"/> 
  <Product name="Toyota Camry" image="https://editorial.pxcrush.net/carsales/general/editorial/2025_toyota-camry_xse_005-8xby.jpg?width=1024&height=682" price="150000$"/> 
  <Product name="MacBook Pro 2024 " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcUiux1ryhaVM-NbY_DSN76bLSIY7SZlP5g&s" price="9000$"/> 
  <Product name="BMV X7" image="https://alfaleasing.ru/catalog-next/_next/image/?url=https://io.ilsa.ru/gallery/catalog/f/aa/4364486067ea42aa285b4b5dbe213aaf.jpg&w=3840&q=70" price="1285$"/> 
  <Product name="Mercedes-Benz CLE" image="https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2023/12/06/10/6259462/b1179c0814af92de25900c060c6cae7655636719.jpg" price="19995$"/>
    </>
  )
}

export default App
