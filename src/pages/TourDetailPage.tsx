import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetTours from '../hooks/useGetTours';
import { formatMediaImage } from '../utils';
import SimilarExcursionCard from '../components/SimilarExcursionCard';
import useCurrentLanguage from '../hooks/useCurrentLanguage';
import { useTranslation } from 'react-i18next';
import { BookingFormValues } from '../types/common';
import mainApi from '../api';


// Type for the form state (excluding fields that will be added later)
type FormState = Omit<BookingFormValues, 'tourId' | 'tourName' | 'message'>;

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tours, similarExcursions, loading, error } = useGetTours({ _id: slug });
  const currentLanguage = useCurrentLanguage();
  const { t } = useTranslation();
  const [view, setView] = useState<'details' | 'form' | 'success'>('details');
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    desiredDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (tours.length === 0) return <div>No tour found.</div>;

  const tour = tours[0];
  const title = currentLanguage === 'en' ? tour.title_en : tour.title_pl;
  const content = currentLanguage === 'en' ? tour.content_en : tour.content_pl;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'people' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create complete form data with required fields
      const completeFormData: BookingFormValues = {
        ...formData,
        tourId: tour._id,
        tourName: title,
        message: `Booking request for ${title} on ${formData.desiredDate} for ${formData.numberOfPeople} people`
      };

      const response = await mainApi.sendFormData(completeFormData);
      console.log('Booking submitted:', response.data);
      console.log("completeFormData",completeFormData)

      if (response?.data?.status !== "success") {
        throw new Error("Failed to send the form. Please try again later.");
      }
      setView('success');
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      numberOfPeople: 1,
      desiredDate: '',
    });
    setView('details');
  };

  return (
    <div className="mx-auto py-36 px-4 md:px-32 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={formatMediaImage(tour?.imageUrls[0]) || 'default-image-url.jpg'}
            alt={title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <div>
          {view === 'details' && (
            <>
              <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
              <p className="text-md text-gray-500 mt-2 capitalize">{t(`common.${tour.city}`)}</p>

              <div className="flex justify-between items-center my-8">
                <div>
                  <h3 className="text-lg font-semibold capitalize">{t('common.excursion')}</h3>
                  <p className="text-gray-600">{tour.duration}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold capitalize">{t('common.meals')}</h3>
                  <p className="text-gray-600">Included</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold capitalize">{t('common.beverages')}</h3>
                  <p className="text-gray-600">Not Included</p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-4 capitalize">{t('common.details')}</h3>
                <table className="w-full text-gray-700">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium capitalize">{t('common.location')}</td>
                      <td className="capitalize">{t(`common.${tour.city}`)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium capitalize">{t('common.timing')}</td>
                      <td>{tour.timing}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium capitalize">{t('common.price')}</td>
                      <td>€{tour.price.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button 
                onClick={() => setView('form')}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition hover:cursor-pointer capitalize"
              >
                {t("common.get_an_offer")}
              </button>

              <h3 className="text-xl font-semibold mt-10 mb-4">More Excursions</h3>
              <div className="flex flex-col gap-4">
                {similarExcursions.map((excursion) => {
                  const excursionTitle = currentLanguage === 'en' ? excursion.title_en : excursion.title_pl;
                  return (
                    <SimilarExcursionCard
                      key={excursion._id}
                      _id={excursion._id}
                      title={excursionTitle}
                      duration={excursion.duration}
                      price={excursion.price}
                      imageUrls={excursion.imageUrls}
                    />
                  );
                })}
              </div>
            </>
          )}

          {view === 'form' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Book Your Tour</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Number of People</label>
                  <input
                    type="number"
                    name="numberOfPeople"
                    min="1"
                    value={formData.numberOfPeople}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Desired Date</label>
                  <input
                    type="date"
                    name="desiredDate"
                    value={formData.desiredDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setView('details')}
                    className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {view === 'success' && (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <svg 
                  className="w-16 h-16 mx-auto text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Request Sent Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your booking request. We've received your details and will contact you shortly to confirm your reservation.
              </p>
              <button
                onClick={resetForm}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Back to Tour Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;