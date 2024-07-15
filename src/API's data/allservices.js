
export class Services{

  async getAllpost(){
    const url = 'https://backend-youtube.vercel.app/api/v2/video/get-all-videos';
    const options = {
      method: 'GET'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

  async getUserById(userId){
    const url = `https://backend-youtube.vercel.app/api/v2/users/get-user/${userId}`;
    const options = {
      method: 'GET'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }


   async createAccount(formData,loginForm){


    const url = `https://backend-youtube.vercel.app/api/v2/users/register`;
    const options = {
      method: 'POST',
      body: formData,
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return await this.login(loginForm);
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }


   }

   async login(allData){
   

    const url = `https://backend-youtube.vercel.app/api/v2/users/login`;
    const options = {
      method: 'POST',
      body: allData ,
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
   }


   async getCurrentUser(){
    const url = `https://backend-youtube.vercel.app/api/v2/users/getCurrentUser`;
    const options = {
      method: 'GET',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }

   }

   async getChannelDetail(userId){
    const url = `https://backend-youtube.vercel.app/api/v2/users/c/${userId}`;
    const options = {
      method: 'GET',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
   }
   
   async toggleSubscribed(channelId){
    const url = `https://backend-youtube.vercel.app/api/v2/subscription/toggle-subscription/${channelId}`;
    const options = {
      method: 'GET',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
   }

 async getAllVideosOfUser(userId){
  const url = `https://backend-youtube.vercel.app/api/v2/video/getAllVideosUser/${userId}`;
  const options = {
    method: 'GET',
   credentials: 'include'
  }

  try {
      const response = await fetch(url, options);
      if(!response){
        throw new Error("Please check your system")
      }
      const result = await response.json();
      if(result) return result;
      console.log(result.data);
    } catch (error) {
      console.error(error);
      return false
    }
 }

 async getTweetsUser(userId){
  const url = `https://backend-youtube.vercel.app/api/v2/tweet/get-all-user-tweets/${userId}`;
  const options = {
    method: 'GET',
   credentials: 'include'
  }

  try {
      const response = await fetch(url, options);
      if(!response){
        throw new Error("Please check your system")
      }
      const result = await response.json();
      if(result) return result;
      console.log(result.data);
    } catch (error) {
      console.error(error);
      return false
    }
 }

 async createPlaylist(formData){
  const url = `https://backend-youtube.vercel.app/api/v2/playlist/add-playlist`;
  const options = {
    method: 'POST',
    body: formData,
   credentials: 'include'
  }

  try {
      const response = await fetch(url, options);
      if(!response){
        throw new Error("Please check your system")
      }
      const result = await response.json();
      if(result) return result;
      console.log(result.data);
    } catch (error) {
      console.error(error);
      return false
    }
 }
 


  async createVideo(formData){
    const url = `https://backend-youtube.vercel.app/api/v2/video/uploadVideo`;
    const options = {
      method: 'POST',
      body: formData,
     credentials: 'include'
    }
  
    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }


  async updateVideo(formData,videoId){
    const url = `https://backend-youtube.vercel.app/api/v2/video/update-video/${videoId}`;
    const options = {
      method: 'PATCH',
      body: formData,
     credentials: 'include'
    }
  
    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

  async createTweet(formData){
    const url = `https://backend-youtube.vercel.app/api/v2/tweet/create-tweet`;
    const options = {
      method: 'POST',
      body: formData,
     credentials: 'include'
    }
  
    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

  async addViewsOfVideo(videoId){
    const url = `https://backend-youtube.vercel.app/api/v2/video/addViews/${videoId}`;
    const options = {
      method: 'POST',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

  async getUserPlaylist(userId){
    const url = `https://backend-youtube.vercel.app/api/v2/playlist/get-all-user-playlist/${userId}`;
    const options = {
      method: 'GET',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

  async getPlaylistById(playlistId){
    const url = `https://backend-youtube.vercel.app/api/v2/playlist/get-playlist/${playlistId}`;
    const options = {
      method: 'GET',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }


  async addVideoToPlaylist(playlistId,videoId){
    const url = `https://backend-youtube.vercel.app/api/v2/playlist/add-video-playlist/${playlistId}/${videoId}`;
    const options = {
      method: 'POST',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

  async removeVideoFromPlaylist(playlistId,videoId){
    const url = `https://backend-youtube.vercel.app/api/v2/playlist/remove-video-playlist/${playlistId}/${videoId}`;
    const options = {
      method: 'POST',
     credentials: 'include'
    }

    try {
        const response = await fetch(url, options);
        if(!response){
          throw new Error("Please check your system")
        }
        const result = await response.json();
        if(result) return result;
        console.log(result.data);
      } catch (error) {
        console.error(error);
        return false
      }
  }

   async getVideoById(videoId){
     const url = `https://backend-youtube.vercel.app/api/v2/video/getVideo/${videoId}`;
     const options = {
      method: "GET",
      credentials: "include"
     }

     try {
        const data = await fetch(url,options);

        if (!data) {
           throw new Error("please check your server")
        }

        const response = await data.json();

        if (response) {
          return response;
        }
     } catch (error) {
        throw error
     }
   }


   async getAllcomments(userId){
    const url = `https://backend-youtube.vercel.app/api/v2/comment/getAll-comments/${userId}`;
    const options = {
     method: "GET",
     credentials: "include"
    }

    try {
       const data = await fetch(url,options);

       if (!data) {
          throw new Error("please check your server")
       }

       const response = await data.json();

       if (response) {
         return response;
       }
    } catch (error) {
       throw error
    }
   }

   async logout(){
    const url = `https://backend-youtube.vercel.app/api/v2/users/logout`;
    const options = {
     method: "POST",
     credentials: "include"
    }

    try {
       const data = await fetch(url,options);

       if (!data) {
          throw new Error("please check your server")
       }

       const response = await data.json();

       if (response) {
         return response;
       }
    } catch (error) {
       throw error
    }
   }

  }

const service = new Services()

export default service;

