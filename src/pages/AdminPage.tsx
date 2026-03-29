import { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  created_at: string;
}

const AdminPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contacts");
        return res.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <section className="pt-28 pb-16 px-4 min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Contact Submissions
        </h1>
        <p className="text-center text-gray-500 mb-8">
          All messages received from the contact form
        </p>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-gray-500">Loading submissions...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
            <p className="text-gray-500 mt-2">
              Please make sure the site is deployed and try again.
            </p>
          </div>
        )}

        {!loading && !error && contacts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-5xl mb-4">📭</p>
            <p className="text-gray-500 text-lg">No submissions yet.</p>
            <p className="text-gray-400 mt-1">
              Messages will appear here once someone submits the contact form.
            </p>
          </div>
        )}

        {!loading && !error && contacts.length > 0 && (
          <>
            <p className="text-sm text-gray-500 mb-4 text-right">
              Total: <span className="font-bold text-pink-600">{contacts.length}</span> submission{contacts.length !== 1 ? "s" : ""}
            </p>

            {/* Desktop table view */}
            <div className="hidden md:block overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-sm">#</th>
                    <th className="px-5 py-4 font-semibold text-sm">Name</th>
                    <th className="px-5 py-4 font-semibold text-sm">Phone</th>
                    <th className="px-5 py-4 font-semibold text-sm">Email</th>
                    <th className="px-5 py-4 font-semibold text-sm">Service</th>
                    <th className="px-5 py-4 font-semibold text-sm">Message</th>
                    <th className="px-5 py-4 font-semibold text-sm">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c, i) => (
                    <tr
                      key={c.id}
                      className={`border-b last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-pink-50/40"
                      } hover:bg-pink-50 transition-colors`}
                    >
                      <td className="px-5 py-4 text-gray-400 text-sm">{i + 1}</td>
                      <td className="px-5 py-4 font-medium text-gray-800">{c.name}</td>
                      <td className="px-5 py-4 text-gray-600">
                        <a href={`tel:${c.phone}`} className="text-pink-600 hover:underline">
                          {c.phone}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-gray-600">{c.email || "—"}</td>
                      <td className="px-5 py-4">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {c.service}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600 max-w-xs truncate" title={c.message}>
                        {c.message || "—"}
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-sm whitespace-nowrap">
                        {formatDate(c.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card view */}
            <div className="md:hidden space-y-4">
              {contacts.map((c, i) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 p-5"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-800 text-lg">{c.name}</h3>
                    <span className="text-xs text-gray-400">#{i + 1}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-gray-400">Phone:</span>{" "}
                      <a href={`tel:${c.phone}`} className="text-pink-600 font-medium">
                        {c.phone}
                      </a>
                    </p>
                    {c.email && (
                      <p>
                        <span className="text-gray-400">Email:</span>{" "}
                        <span className="text-gray-700">{c.email}</span>
                      </p>
                    )}
                    <p>
                      <span className="text-gray-400">Service:</span>{" "}
                      <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                        {c.service}
                      </span>
                    </p>
                    {c.message && (
                      <p>
                        <span className="text-gray-400">Message:</span>{" "}
                        <span className="text-gray-700">{c.message}</span>
                      </p>
                    )}
                    <p className="text-gray-400 text-xs pt-1">
                      {formatDate(c.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminPage;
