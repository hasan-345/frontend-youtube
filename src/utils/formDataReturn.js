
export function returnFormData(allData={}){
     const formData = new FormData();

     formData.append("fullName",allData?.fullName)
     formData.append("email",allData?.email)
     formData.append("password",allData?.password)
     formData.append("username",allData?.username)
     formData.append("avatar",allData?.avatar)
     formData.append("coverImage",allData?.coverImage)

     return formData
}