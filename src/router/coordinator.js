

 export const goToProfile = (navigate) => {
    navigate("/profile")
  }

 export const goToHome = (navigate) => {
    navigate("/")
  }

 export const goBack = (navigate) => {
    navigate(-1)
  }

  export const goToPersonPage = (navigate, nome) => {
    navigate(`/profile/${nome}`)
  }