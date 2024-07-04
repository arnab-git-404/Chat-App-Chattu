import getPrismaInstance from "../utils/PrismaClient.js";



export const checkUser = async (req, res) => {

  try {
    const { email } = req.body;

  
    if (!email) {
      return res.status(400).json({ msg: "Email is Required", status: false });
    }
  
    const prisma = getPrismaInstance();
    console.log('3rd stage ');
    const user = await prisma.User.findUnique({ where: { email } });
    console.log(user);


    if (!user) {
      return res.status(404).json({ msg: "User Not Found!!" , status: false });
    } else {
      return res.json({ msg: "User Found!!", status: true, data: user });
    }


  } catch (e) {

    console.error(error);
    res.status(500).json({ //500 = internal Server Error 
      success: false,
      data: "internal server error",
      message: error.message,
    });
   
   
  }
};


