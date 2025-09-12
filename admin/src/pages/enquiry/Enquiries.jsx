import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import { useGetEnquiriesQuery } from "../../store/services/enquiry/enquiryApi";

const EnquiriesPage = () => {
  const { enquiries } = useSelector((state) => state.enquiry);

  useGetEnquiriesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="sb2-2">
      <div className="sb2-2-2">
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li className="active-bre">
            <a href="#">Enquiries</a>
          </li>
        </ul>
      </div>

      <div className="sb2-2-3">
        <div className="row">
          <div className="col-md-12">
            <div className="box-inn-sp">
              <div className="inn-title">
                <h4>Enquiries</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="tab-inn">
                <div className="table-responsive table-desi">
                  <table className="highlight">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!enquiries?.length ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No enquiries found.
                          </td>
                        </tr>
                      ) : (
                        enquiries?.map((enq, index) => (
                          <tr key={index}>
                            <td>{enq.name}</td>
                            <td>{enq.email}</td>
                            <td>{enq.subject}</td>
                            <td>{enq.phone}</td>
                            <td>{enq.message}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiriesPage;
