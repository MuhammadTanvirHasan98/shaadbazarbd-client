import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

export default function UpdateProduct() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const data = useLoaderData();
  console.log(data);

  const {
    _id,
    product_name,
    product_img,
    stock,
    category,
    origin,
    price,
    description,
  } = data;

  console.log(price);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const category = form.category.value;
    const product_img = form.product_img.value;
    const price = +form.price.value;
    const origin = form.origin.value;
    const description = form.description.value;

    const productInfo = {
      product_name,
      category,
      product_img,
      price,
      stock,
      origin,
      description,
      admin: {
        name: user?.displayName,
        email: user?.email,
      },
    };
    console.table(productInfo);

    try {
      const { data } = await axiosPublic.patch(
        `/updateProduct/${_id}`,
        productInfo
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "Your product has been updated.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/allProducts");
      } else {
        Swal.fire({
          position: "top-middle",
          icon: "error",
          title: "You didn't update anything.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] border-2 border-cyan-300 space-y-7 flex flex-col justify-center">
      <div className="md:p-10 p-6 my-8 xl:w-[70%] w-[90%]  mx-auto border-2 border-cyan-200 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="text-center">
          <h1 className=" md:text-3xl text-2xl coff font-bold merienda text-cyan-600">
            Update a Product
          </h1>
          <hr className="md:w-[260px] w-[195px] mx-auto border-cyan-400" />
          <p className="md:w-3/4 mx-auto  mt-2 text-gray-500 font-semibold tracking-wide md:text-sm  text-xs">
            You can update a product's item that is available in your
            stock.After updating a product, you can find it in{" "}
            <span className="text-cyan-600">All Products </span>
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleUpdateProduct}>
            {/* Field 1 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Product Name
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={product_name}
                  placeholder="Enter product's name"
                  name="product_name"
                  className="block w-full px-4 py-2 text-cyan-700 bg-white border focus:border-cyan-500 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Category
                  </span>
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="block w-full px-4 py-2 text-cyan-700 bg-white border focus:border-cyan-500 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                >
                  <option value="">Category</option>
                  <option value="ghee">Ghee</option>
                  <option value="honey">Honey</option>
                  <option value="oil">Oil</option>
                  <option value="jaggery">Jaggery</option>
                  <option value="seeds">Nuts&Seeds</option>
                  <option value="masala">Masala</option>
                </select>
              </div>
            </div>

            {/* Field 2 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full ">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Image
                  </span>
                </label>
                <input
                  type="text"
                  id="product_img"
                  name="product_img"
                  defaultValue={product_img}
                  className="block w-full p-1 text-cyan-700 bg-white border focus:border-cyan-500 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter meal's price"
                  className="block w-full px-4 py-2 text-cyan-700 bg-white border focus:border-cyan-500 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>
            </div>

            {/* Field 3 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Initial Stock
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue={stock}
                  name="stock"
                  placeholder="Enter number of products"
                  className="block w-full px-4 py-2 text-cyan-700 bg-white border focus:border-cyan-500 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Product Origin
                  </span>
                </label>
                <input
                  type="text"
                  name="origin"
                  defaultValue={origin}
                  placeholder="Enter product's origin"
                  className="block w-full px-4 py-2 text-cyan-700 bg-white border focus:border-cyan-500 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>
            </div>

            {/* Field 4 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Admin Name
                  </span>
                </label>

                <input
                  type="text"
                  name="userName"
                  disabled={true}
                  className="block w-full px-4 py-2 text-cyan-500 bg-white border font-semibold hover:border-cyan-500 hover:ring-opacity-40  hover:outline-none hover:ring hover:ring-cyan-300 transition duration-500"
                  value={user?.displayName}
                />
              </div>

              {/* User email */}
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-cyan-600 text-lg">
                    Admin Email
                  </span>
                </label>

                <input
                  type="text"
                  name="email"
                  disabled={true}
                  className="block w-full px-4 py-2 text-cyan-500 bg-white border font-semibold hover:border-cyan-500 hover:ring-opacity-40  hover:outline-none hover:ring hover:ring-cyan-300 transition duration-500"
                  value={user?.email}
                />
              </div>
            </div>

            {/*Short description field */}
            <div className="form-control w-">
              <label className="label">
                <span className="label-text font-bold text-cyan-600 text-lg">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="block w-full px-4 py-2 text-cyan-700 bg-white border     focus:border-cyan-500 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-cyan-300"
                placeholder="Give a short description of meal item such as making procedure, ingredients etc. within 100-120 words."
                required
              ></textarea>
            </div>

            {/*Add coffee Button */}
            <div className="text-center mt-4">
              <button className="btn md:btn-md btn-sm transition duration-700 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-300  btn-outline font-bold rounded-none text-xl mt-4 md:px-6 px-8">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
