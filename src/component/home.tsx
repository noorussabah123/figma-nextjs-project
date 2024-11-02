import Image from "next/image"
import { posix } from "path"
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function HomeContent() {
    return (
      <>
       <div className="homeContainer">
           <div className="content">
               <Image 
                  src= "/image/Content.png"
                  alt="content"
                  width={714}
                  height={300}
               />

            <div>
             <Image 
                src= "/image/phone.png"
                alt="Iphone"
                width={406}
                height={632}
             />
           </div>
           </div>
       </div>
       <div className="bannerContainer">
       <div className="bannerContent">
         <Image 
         src="/image/Left Banners.png"
         alt="leftbanner"
         width={900}
         height={600}
         />

        <Image 
        src="/image/Big Banner.png"
        alt="bigbanner"
        width={900}
        height={600}
        />
       </div>
       </div>
       <div className="categoryContainer">
          <h2>Browse By Category</h2>
          <div className="categoryContent">
            <Image 
             src= "/image/Categories.png"
             alt="categories"
             width={1190}
             height={128}
            />
          </div> 
       </div>
       <div className="productContainer">
         <div className="productHeader">
           <ul>
            <li>New Arrival</li>
            <li>Bestseller</li>
            <li>Featured Product</li>
           </ul>
         </div>
         
         <div className="productList">
            <Image  
            src="/image/Product1.png"
            alt="product1"
            width={268}
            height={432}
            />

            <Image 
            src="/image/Product2.png"
            alt="product2"
            width={268}
            height={432}
            />

            <Image 
            src="/image/Product3.png"
            alt="product3"
            width={268}
            height={432}
            />

            <Image 
            src="/image/Product4.png"
            alt="product4"
            width={268}
            height={432}
            />
         </div>
         <div className="productList2">
         <Image 
         src="/image/Product5.png"
         alt="product5"
         width={268}
         height={432}
            />

            <Image 
            src= "/image/Product6.png"
            alt="product6"
            width={268}
            height={432}
            />

            <Image 
            src="/image/Product7.png"
            alt="product7"
            width={268}
            height={432}
            />

            <Image 
            src="/image/Product8.png"
            alt="product8"
            width={268}
            height={432}
            />
         </div>
       </div>

      <div className="banners">
         <div className="bannerChild">
        <Image 
        src="/image/BigBanner1.png"
        alt="banner1"
        width={360}
        height={640}
        />

        <Image 
        src="/image/BigBanner2.png"
        alt="banner2"
        width={360}
        height={640}
        />

        <Image 
        src="/image/BigBanner3.png"
        alt="banner2"
        width={360}
        height={640}
        />

        <Image 
        src="/image/BigBanner4.png"
        alt="banner2"
        width={360}
        height={640}
        />
        </div>
      </div>

      <div className="discountedProduct">
         <div className="discountText">
            <h2>Discounts up to -50% </h2>
         </div>
         <div className="discountedProductList">
             <Image 
             src="/image/discountpr1.png"
             alt="discountedproduct"
             width={268}
             height={432}
             />

             <Image 
             src="/image/discountpr2.png"
             alt="discountedproduct"
             width={268}
             height={432}
             />

            <Image 
             src="/image/discountpr3.png"
             alt="discountedproduct"
             width={268}
             height={432}
             />

            <Image 
             src="/image/discountpr4.png"
             alt="discountedproduct"
             width={268}
             height={432}
             />
         </div>
      </div>

      <div className="banner2">
         <Image 
          src="/image/Banner2.png"
          alt="secondbanner"
          width={1500}
          height={448}
         />
      </div>

      <div className="footer">
         <div className="footerContent">
            <div className="cyberContent">
               <Image 
               src="/image/Logo2.png"
               alt="secondlogo"
               width={65.4}
               height={22}
               /> <br />
               <p>We are residential interior design firm located in<br />
                  Portland.Our boutique-studio offers more than
               </p>

               <div className="footerIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
            </div>
            <div className="columns">
              <div className="firstColumn">
                  <h1>Services</h1>
                     <p>
                     Buyers <br />
                     Gift Cards <br />
                     Credit and Payment <br />
                     Service Contracts <br />
                     Non-cash account <br />
                     Payment
                     </p>
              </div>
              <div className="secondColumn">
                 <h1>Assistance to the buyer</h1>
                 <p>
                 Find an order <br />
                 Terms of Deleivery <br />
                 Exchange and refunds of goods <br />
                 guarantee <br />
                 Frequently asked questions <br />
                 Terms of use of the site <br />
                 </p>
              </div>
            </div>
         </div>
      </div>
       </>
    )
    
}
