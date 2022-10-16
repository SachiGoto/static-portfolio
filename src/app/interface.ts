export interface HomePage{
  data:{
    id:number;
    attributes:{
      Name:string;
      Email:string;
      Cellphone:string;
      Website:string;
      BioSummary:string;
      FullBio:string;
      LinkedIn:string;
      Github:string;
      Behance:string;
      Instagram:string;
      Logo:{
        data:{
          attributes:{
            alternativeText:string;
            url:string;
          }
        }
      }
      Resume:{
         data:{
          attributes:{
            url:string;
          }
         }
      }
      Headshot:{
        data:{
          attributes:{
            alternativeText:string;
            formats:{
              large:{
                url:string;
              }
            }
          }
        }
      }
      WebsiteHeroImage:{
        data:{
          attributes:{
            url:string;
            height:number;
            width:number;
          }
        }
      }
      LinkedinIcon:{
        data:{
          attributes:{
           url:string;
           alternativeText:string;

          }

        }
      }
      GithubIcon:{
        data:{
          attributes:{
            url:string;
            alternativeText:string;

           }

        }
      }
      EmailIcon:{
        data:{
          attributes:{
            url:string;
            alternativeText:string;

           }

        }
      }
      BehanceIcon:{
        data:{
          attributes:{
            url:string;
            alternativeText:string;

           }

        }
      }
      InstagramIcon: {
        data:{
        attributes:{
          url:string;
          alternativeText:string;

         }
      }
    }

    }
  }
}


export interface Skill{



          id:number;
          attributes:{

            SkillName:string;
            SkillScore:string;
            Category:string;
            SkillLogo:{
                data:{
                  attributes:{
                    url:string,
                    alternativeText:string;
                    formats:{
                      thumbnail:{
                        url:string;
                        width:number;
                        height:number;
                      }
                    }
                  }
                }
            }

          }






}


export interface Skills{
  data:Skill[];
}




// export interface Project{
//   id:number;
//   attributes:{
//     Title:string;
//     Summary:string;
//     Description:string;
//     Weblink:string;
//     Trailer:string;
//     StartData:string;
//     EndDate:string;
//     ClientName:string;
//     Category:string;
//     Slug:string;
//     Image:{
//       data:{
//         attributes:{
//           formats:{
//             thumbnail:{
//               url:string;
//               width:number;
//               height:number;
//             }
//           }
//         }
//       }
//     }
//     skills:Skills

//   }
// }

export interface Projects{

    data:ProjectDetail[];




}


export interface ProjectDetail{
// data:[{
  id:number;
  attributes:{
    Title:string;
    Summary:string;
    Description:string;
    WebLink:string;
    Trailer:string;
    StartDate:string;
    EndDate:string;
    ClientName:string;
    Category:string;
    Slug:string;
    Tagline:string;
    MainImage:{
        data:{
          attributes:{
            alternativeText:string;
            formats:{
              large:{
                url:string;
              }
              medium:{
                url:string;
              }
              thumbnail:{
                url:string;

              }

              },url:string;
          }



    }
  };skills:{
      data:[
        {
          attributes:{
            SkillName:string;
            SkillScore:string;
            SkillLogo:{
              data:{
                attributes:{
                  alternativeText:string;
                    url:string;

                }
              }
            }

          }
        }
      ]
    }
  ;Images:{
         data:[{
          attributes:{
            alternativeText:string;
            formats:{
              large:{
                url:string
              }
            },url:string;
          }
         }
        ]
    }

}
}
// ]
// }




// export interface ProjectDetails{
//   data:
//     ProjectDetail

// }

export interface Education {

    //  data:[
    //   {
      id:string;
      attributes:{
        School:string;
        Title:string;
        Startdate:string;
        Enddate:string;
        Note:string;
        Year:string;
        Location:string;
        Logo:{
          data:{
            attributes:{
              formats:{
                thumbnail:{
                  url:string;
                }
              }
            }
          }
        }
      }
    }

//   ]

// }


