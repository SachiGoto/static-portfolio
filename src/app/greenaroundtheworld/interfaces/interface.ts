export interface NewProduct {
  // productID:number;
  imageFront:string;
  imageBack:string;
  title:string;
  description:string;
  originalPrice:number;
  price:number;
  stock:string;
  display:string;

  }


  export interface Login {
    login:boolean;
    message:string;
    data:[
      {
        user_id:number;
        email:string;
        password:string;
      }
    ]

    }



export interface Product {
  productID:number;
  imageFront:string;
  imageBack:string;
  // imageFrontAlt:string;
  // imageBackAlt:string;
  title:string;
  description:string;
  originalPrice:number;
  price:number;
  stock:string;
  stockAvail:any;
  display:string;

  }

  export interface Aboutpage{



      attributes:{
        Title:string;
        aboutus:string;
        ourmission:string;
        whyzerowaste:string;
        whyZeroWaste:string;
        HeroImage:{
          data:{
          attributes:{
            formats:{
              large:{
                url:string;
              }
            }
          }
        }
        },image:{
          data:{
            attributes:{
              formats:{
                large:{
                  url:string;
                }
              }
            }
          }
        }
      }
  }


  export interface Homepage{
    attributes:{
      Companyname:string;
      Title:string;
      logo:{
        data:{
          attributes:{
            url:string;
            formats:{
              thumbnail:{
                url:string;
              }
            }
          }
        }
      },HeroImage:{
        data:{
        attributes:{
          formats:{
            large:{
              url:string;
            }
          }
        }
      }
      }
    }
  }


  export interface Products {

    // data: [
    //     {
    id: number;
    attributes: {
        Title: string;
        Description: string;
        OriginalPrice: number;
        Price: number;
        Stock: string;
        LongDescription: string;
        ProductImageFront: {
            data:{
                attributes: {
                    formats: {
                        large: {
                            url: string;
                        }, medium: {
                            url: string;

                        }, small: {
                            url: string
                        }
                    }
                }
            }

        },ProductImageBack:{
          data:{
            attributes:{
              formats:{
                large:{
                  url:string;
                },medium:{
                  url:string;
                },small:{
                  url:string;
                }
              }
            }
          }
        }


    }


    //     }
    // ]

  }






