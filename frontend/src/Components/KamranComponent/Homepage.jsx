
import React from "react";
import Slider from "react-slick";
import style from "../../Style/Homepage.module.css"
import { useState } from "react";
const data = [
  {
    id: 1,
    
    image:
      "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
  },
  {
    id: 2,
    
    image:
      "https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
  },
  {
    id: 3,
 
    image:
      "https://m.media-amazon.com/images/I/71mcEBNGtNL._SX3000_.jpg"
  },
  {
    id:4,
    image:"https://m.media-amazon.com/images/I/61O759bS39L._SX3000_.jpg"
  },
  {
    id:5,
    image:"https://m.media-amazon.com/images/I/71aJVWrz15L._SX3000_.jpg"
  },
  {
    id:6,
    image:"https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg"
  },{
    id:7,
    image:"https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
  }
];
const Homepage = () => {
  const [index, setIndex] = useState(0);
      var settingss = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
  return (
    <div>
        <div>
  

<img className={style.slide}  src={data[index].image} alt="mage" />
<button disabled={index === 0} onClick={() => setIndex(index - 1)}>
<img className={style.left} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAASFBMVEX///8AAABAQEDo6OjMzMzCwsLZ2dmTk5PR0dHHx8fc3NyXl5f39/c8PDzv7++/v78fHx9NTU0zMzMPDw8mJiatra2lpaWenp7lstYLAAAAqklEQVRoge3W2w6CMBRE0R6kICiI9///UyUWXjkahkjY+70rExKahkBEREREtL1aoR0tF9om03vbbC+0zSqBXSVbMf002PX89ri7mN9W7o7C3Wu3O+X37s6Zs4v3Vyjsh7wXUJym/hTPlXgohxNXP+6/OA/pxK1ud86ObnzUsy/ObEMvF9neSF4uw/ZGgS+0/a7A0/aHxP7oT5Hd6zr7fUcKbSIiIiKi1fUCvGcFRmiA9h8AAAAASUVORK5CYII=" alt="" />
</button>

<button 
 disabled={index === data.length - 1}
 onClick={() => setIndex(index + 1)}
>
<img className={style.right}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAATlBMVEX///8AAACdnZ38/Pz4+PhxcXFqampVVVVtbW1iYmJbW1ssLCxnZ2e6urpSUlLNzc3w8PA6OjqWlpZ6enolJSWzs7NHR0dMTEzCwsLp6elVmHY7AAABkklEQVR4nO2a226DMBBEvbUD5ZLS5tIm//+jeSAJeAVBlUJmpMx5RzrC7HqwNwQhhBBCCCHEI767U3cGOxx/zKzZRaTDznpqoENnN+oEk9jfJewTZtEMElahJA4jCStBEu1YwgrMimwtt4BIhE1u8QWRSM6igqxIqnILTKXGOrfA9M7oVqSG7COpcDWCWZEyt2gREiG6d8FRqS1FjRSQrzO6foGpVL8imJST8i0V1TtdpWJSju+dHJXK0TsxKSe6rxOTO5VyBpRyBpRyRhaUKQe0IpQp5517p+8XC73zfPxYBXPv4pHx3l5EOft1+re2Jps5i+3ys8/jNCPx+0qJv2mH1Cw/+jya6QqhkKBYDo4Pk6JEKZpVoGjba/HPDWwVGLZyhlDDEO8Ygi5D5Gf4+WH4DWT4IWY4GmA4JKHokwQHZwxHiBR90jkwrAUiwzBcNTBcujBcPzFmGMSVpDJMjzLM1UEZpncgyDB+xAlygE0x7EUx9kYxAEgxCkkxFEoxHksxKMwxMs0xPC6EEEIIIQQRF4OJEunYGL5bAAAAAElFTkSuQmCC" alt="" />
</button>

</div>
      
      <div className={style.main1}>
        <div className={style.box1} >
        <h1>Shop & Pay | Earn rewards daily</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Mixer-372X232._SY232_CB614658696_.jpg" alt="" />
            <p>Up to 50% off | Home appliances
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_bedsheet-qc1_372x232_in-en._SY232_CB594776299_.jpg" alt="" />
            <p>
Up to 55% off | Bedsheets & more
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Container-372X232._SY232_CB614658696_.jpg" alt="" />
            <p>Starting ₹169 | Containers & more
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Photoframe-372X232._SY232_CB614658696_.jpg" alt="" />
            <p>
Starting ₹229 | Photo frames, clocks & more
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div className={style.box1}>
            <h1>Smartwatch starts at</h1>
            <div >
                <img id={style.watch} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_1._SY608_CB614835787_.jpg" alt="" />
            </div>
            <button>See more</button>
        </div>
        <div className={style.box1} >
        <h1>Shop & Pay | Earn rewards daily</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg" alt="" />
            <p>Clothing</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg" alt="" />
            <p>footewear</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg" alt="" />
            <p>watches</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg" alt="" />
            <p>Bag & Luggage</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div  className={style.yy} >
            <div className={style.last}>
                <h1>Sign in for your best experience</h1>
                <button>Sign in securely</button>
            </div>
            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" />
        </div>
      </div>
      <div className={style.main2}>
      <div className={style.box1} >
        <h1>Automotive essentials | Up to 60% off</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg" alt="" />
            <p>Cleaning accessories







</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg" alt="" />
            <p>
            
Tyre & rim care
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg" alt="" />
            <p>Helmets
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg" alt="" />
            <p>
            Vacuum cleaner
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div className={style.box1}>
            <h1>Up to 50% off | Monitor blood sugar at home</h1>
            <div >
                <img id={style.watch1} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_high_3._SY608_CB592656736_.jpg" alt="" />
            </div>
            <button>Visit the store</button>
        </div>
        <div className={style.box1} >
        <h1>Up to 60% off | Professional tools,...</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg" alt="" />
            <p>
Professional tools






</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/372X2322._SY232_CB643952553_.jpg" alt="" />
            <p>
            Measuring instruments
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/372X2321._SY232_CB643952553_.jpg" alt="" />
            <p>Cleaning supplies
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med2x._SY232_CB424026091_.jpg" alt="" />
            <p>
            Medical supplies
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div className={style.box1} >
        <h1>Book travel tickets and get exciting offers</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Flight_1_372x232._SY232_CB613655434_.jpg" alt="" />
            <p>Get up to ₹2000 off + 2% back on flights







</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Train_1_372x232._SY232_CB613655434_.jpg" alt="" />
            <p>
            Zero payment gateway charges
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Bus_1_372x232._SY232_CB613655434_.jpg" alt="" />
            <p>Get flat 10% back on bus tickets
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Accessory372x232._SY232_CB613655434_.jpg" alt="" />
            <p>
            Products for your travel needs
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
      </div>
     <div className={style.slider2}>
     <h2> Todays's Deals </h2>
        <Slider className={style.resslider}  {...settingss }>
          <div >
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/41o3CoW58tL._AC_SY400_.jpg" alt="" />
            <div>
             
            </div>
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/31cQxf0GUeL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg }src="https://m.media-amazon.com/images/I/61QQtY6qtHL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/31vI2kh7XFL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/4151aOEWqAL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71JdO22IWBL._CB613517346_._SY200__AC_SY400_.png" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/41vTzQLZgVL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg }src="https://m.media-amazon.com/images/I/41vtSc1WjdL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/51eJq2jkOxL._AC_SY400_.jpg" alt="" />
          </div>
        </Slider>
     </div>
     <div className={style.slider2}>
     <h2>Up to 50% off | Kitchen appliances, cookware & more</h2>
        <Slider {...settingss }>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/81lk7-7LejL._AC_SY400_.jpg" alt="" />
            <div>
             
            </div>
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71VgHp7sgEL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg }  src="https://m.media-amazon.com/images/I/61GgIV3tqRL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/51UJBnfcWDL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/91-T56QlYRL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/91-T56QlYRL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71RN2I02mnS._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61GbW1W3qRL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71DaWCa5WUL._AC_SY400_.jpg" alt="" />
          </div>
        </Slider>
     </div>
     <div className={style.slider2}>
     <h2> Up to 60% off | Car & bike accessories & more </h2>
        <Slider {...settingss }>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/717wYrO+b0L._AC_SY400_.jpg" alt="" />
            <div>
             
            </div>
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71t9-9MtwkL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61eEetcCb9L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71fRFM4eMYS._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61eEetcCb9L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/51BXMsxaVoL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/819Gt9Act8L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/819Gt9Act8L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71b7UbPX72L._AC_SY400_.jpg" alt="" />
          </div>
        </Slider>
     </div>
     <div className={style.Image}><img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" /></div>
    <div className={style.main3}>
    <div className={style.box1} >
        <h1>Up to 40% off | Daily essentials</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_04._SY232_CB616377583_.jpg" alt="" />
            <p>Health & household







</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_01._SY232_CB616377583_.jpg" alt="" />
            <p>
            Grocery essentials
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_03._SY232_CB616377583_.jpg" alt="" />
            <p>Pet supplies
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_02._SY232_CB616377583_.jpg" alt="" />
            <p>
Starting ₹229 | Photo frames, clocks & more
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div className={style.box1}>
            <h1>Bestselling Smartwatch starts at ₹1,999</h1>
            <div >
                <img id={style.watch2} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_2._SY608_CB614835787_.jpg" alt="" />
            </div>
            <button>See more</button>
        </div>
        <div className={style.box1}>
            <h1>Roomies Season 4 out now on miniTV</h1>
            <div >
                <img id={style.watch2} src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Tanisha/DeskCC_758x608_Roomies._SY608_CB616069683_.jpg" alt="" />
            </div>
            <button>Watch free </button>
        </div>
        <div className={style.box1} >
        <h1>Minimum 50% off | Top styles for her</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/1_2X._SY232_CB618751254_.jpg" alt="" />
            <p>Allen Solly, Fort Collins & more







</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/2_2X._SY232_CB618751254_.jpg" alt="" />
            <p>
            Biba, Aurelia & more
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/3_2X._SY232_CB618751254_.jpg" alt="" />
            <p>Womanista, Mimosa & more
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/4_2X._SY232_CB618751254_.jpg" alt="" />
            <p>
            Harpa, Only & more
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
    </div>
    <div className={style.slider2}>
     <h2> Frequently repurchased in Beauty & Personal Care </h2>
        <Slider {...settingss }>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/51u3BipAoQL._AC_SY400_.jpg" alt="" />
            <div>
             
            </div>
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/412s6dyeWyL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/5159bBs2K4L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61WtX3gE1CL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/41-qstscYeL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/510FAdhUiCL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/51XTNPnYyAL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61ScSAfkDSL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/51x3cj+-iUL._AC_SY400_.jpg" alt="" />
          </div>
        </Slider>
     </div>
     <div className={style.main4}>
     <div className={style.box1}>
            <h1>Bestselling Smartwatch starts at ₹1,999</h1>
            <div >
                <img id={style.watch2} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/CC_Rev2x._SY608_CB594433898_.jpg" alt="" />
            </div>
            <button>Explore All</button>
        </div>
        <div className={style.box1} >
        <h1>Birthday store</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_2x._SY232_CB662999952_.jpg" alt="" />
            <p>Gift for mens







</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_2x._SY232_CB662999952_.jpg" alt="" />
            <p>
            Gift for women
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_2x._SY232_CB662999952_.jpg" alt="" />
            <p>Gift for Boys
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_2x._SY232_CB662999955_.jpg" alt="" />
            <p>
            Gift for girls
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div className={style.box1} >
        <h1>Up to 40% off | Daily essentials</h1>
        <div className={style.box}>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_2_2x._SY232_CB616376703_.jpg" alt="" />
            <p>Laundry essentials











</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_1_2x._SY232_CB616376703_.jpg" alt="" />
            <p>
            Household cleaners
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_4_2x._SY232_CB616376703_.jpg" alt="" />
            <p>Oral care
</p>
        </div>
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_3_2x._SY232_CB616376703_.jpg" alt="" />
            <p>
            Air fresheners
</p>
        </div>
        </div>
        <button>Shop Now</button>
        </div>
        <div className={style.box1}>
            <h1>Bestselling Smartwatch starts at ₹1,999</h1>
            <div >
                <img id={style.watch2} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_2._SY608_CB614835787_.jpg" alt="" />
            </div>
            <button>See more</button>
        </div>
     </div>
     <div className={style.slider2}>
     <h2> Best Sellers in Computers & Accessories </h2>
        <Slider {...settingss }>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY400_.jpg" alt="" />
            <div>
             
            </div>
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61DjwgS4cbL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/516LU0H963L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/612spb+L0xL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61m5Uu4OMJL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
           <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/81hWpe10SzL._AC_SY400_.jpg" alt="" />
          </div>
          <div>
            <img className={style.sliderimg } src="https://m.media-amazon.com/images/I/61onAgKP5gL._AC_SY400_.jpg" alt="" />
          </div>
        </Slider>
     </div>
    </div>
  )
  }
export default Homepage
