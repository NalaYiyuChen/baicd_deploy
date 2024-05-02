import React, { useEffect, useState } from 'react';
import BlogPost from "../components/Blog/BlogPost";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png';
import axios from 'axios'; // Import Axios

export const separatorWord = "END321";

const Blog = () => {
    const styles = {
      };
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData();    // Fetch the CSV data when the component mounts
    }, []); // The empty array ensures that this effect runs only once, like componentDidMount



    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRbmM1iE0n8uqtt4A6u6Jvdnhtke2y_zFy_p6wPkTAc2ZheDvJoXEn4gCEh9hSz2RAf-a7FRmIws7Cl/pub?output=csv'; 
    
        axios.get(csvUrl)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
                setCsvData(parsedCsvData);        // Set the fetched data in the component's state
                console.log("parsedCsvData", parsedCsvData);  

            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
        }

        function parseCSV(csvText) {
            var loopData ='';
            const rows = csvText.split('\r');        // Use a regular expression to split the CSV text into rows while handling '\r'
            const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
            const data = [];        // Initialize an array to store the parsed data
            for (let i = 1; i < rows.length; i++) {
                const separateOn = ' ' + separatorWord + ','
                const rowData = rows[i].split(separateOn);          // Use the regular expression to split the row while handling '\r'
                const rowObject = {};
                for (let j = 0; j < headers.length; j++) {
                    if (headers[j] == "text") {
                        let currString = rowData[j];
                    }
                    rowObject[headers[j]] = rowData[j];
                }
                data.push(rowObject);
            }
            return data;
        }

    const blogPosts = () => {
               return class extends React.Component {
          render() {
            return (
                <div className='blogText'>
                {csvData.map(function(data) {
                  return (
                    <div key={data.text}>
                      <BlogPost title={data.title} author={data.author} date={data.date} text={data.text} />
                    </div>
                  )
                })}
                </div >
            
              )
          }
        }
      }

    const PostComponent = blogPosts();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh",
                marginLeft: "15%",
                marginRight: "15%",
                textAlign: "justify",
            }}
        >
            <div className="banner">
                <img src={BAICD_BannerImage}></img>
            </div>

            <h1>
                <div className="pageTitles">
                    BLOG: 打卡/CHECK-INS
                </div>
            </h1>

            <div className='defaultFontXLarge'>Daka, or check-ins, in Chinese dance refer to daily exercises that Classical Chinese dancers do to keep key body parts in working order. On this blog, you'll hear reflections from our choreographers, dancers, techs, and production team on how and why we've built our Company the way we have. We know Chinese dance isn't the only art form where artists can benefit from performance, filming, and other resources to push the boundaries of their art, but some people are too far away from us, either in space or in visual similarity, to come under our roof. We're always ready to help them one on one, but here we share some reflections on our process, so our lessons can propel future artistic groundbreakers wherever they may be. <br/><br/><br/>
            </div>
            {/* <div>{i}</div>
            // <pre>
            //     {i}
            // </pre> */}

    <div className='blogText'>
      <PostComponent />
    </div>
            
        </div>
    );
};
 
export default Blog;