import { CiSquareRemove } from "react-icons/ci";
import TableHeaderText from "../../Components/Dashboard/TableHeaderText";

export default function ManageUsers() {
  return (
    <div>
      {" "}
      <div className="min-h-[calc(100vh-80px)] border-2 border-cyan-300 space-y-7">
        <div className="m-2">
          <TableHeaderText text={"My All Users"} count={4} />

          <div className="mt-4 border p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 font-normal">Name</th>
                  <th className="text-left py-4 font-normal">Email</th>
                  <th className="text-left py-4 font-normal">
                    Purchased Products
                  </th>
                  <th className="text-left py-4 font-normal">Status</th>
                  <th className="text-right py-4 font-normal pr-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <h3 className="font-medium">Muhamnad Tanvir Hasan</h3>
                    </div>
                  </td>

                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">muhammadtanvir@gmail.com</h3>
                    </div>
                  </td>

                  <td className="py-4 pl-10">
                    <div>
                      <h3 className="font-medium">{10}</h3>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">{"Admin"}</h3>
                    </div>
                  </td>

                  <td className="py-4 text-right">
                    <div className="flex justify-center gap-4 items-center">
                      <CiSquareRemove className="cursor-pointer text-3xl text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <h3 className="font-medium">Hasan Rahman</h3>
                    </div>
                  </td>

                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">hasanrahman@gmail.com</h3>
                    </div>
                  </td>

                  <td className="py-4 pl-10">
                    <div>
                      <h3 className="font-medium">{2}</h3>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">{"user"}</h3>
                    </div>
                  </td>

                  <td className="py-4 text-right">
                    <div className="flex justify-center gap-4 items-center">
                      <CiSquareRemove className="cursor-pointer text-3xl text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <h3 className="font-medium">Shahadat Shawon</h3>
                    </div>
                  </td>

                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">shahadatshwon@gmail.com</h3>
                    </div>
                  </td>

                  <td className="py-4 pl-10">
                    <div>
                      <h3 className="font-medium">{15}</h3>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">{"user"}</h3>
                    </div>
                  </td>

                  <td className="py-4 text-right">
                    <div className="flex justify-center gap-4 items-center">
                      <CiSquareRemove className="cursor-pointer text-3xl text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <h3 className="font-medium">Maruful Islam Shihab</h3>
                    </div>
                  </td>

                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">marufulshihab@gmail.com</h3>
                    </div>
                  </td>

                  <td className="py-4 pl-10">
                    <div>
                      <h3 className="font-medium">{20}</h3>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">{"user"}</h3>
                    </div>
                  </td>

                  <td className="py-4 text-right">
                    <div className="flex justify-center gap-4 items-center">
                      <CiSquareRemove className="cursor-pointer text-3xl text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <h3 className="font-medium">Nasim Ahmed</h3>
                    </div>
                  </td>

                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">nasimahmed@gmail.com</h3>
                    </div>
                  </td>

                  <td className="py-4 pl-10">
                    <div>
                      <h3 className="font-medium">{6}</h3>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <h3 className="font-medium">{"user"}</h3>
                    </div>
                  </td>

                  <td className="py-4 text-right">
                    <div className="flex justify-center gap-4 items-center">
                      <CiSquareRemove className="cursor-pointer text-3xl text-red-500" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
