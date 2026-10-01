const NAZWA_KATEGORII = { gory: 'Góry', morze: 'Morze', miasto: 'Miasto' }
const KOLOR_KATEGORII = { gory: 'success', morze: 'primary', miasto: 'dark' }

function PhotoCard({ id, title, description, category, image, alt }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="d-flex gap-2 mt-auto">
      <button
        type="button"
        className="btn btn-outline-primary flex-fill"
        data-bs-toggle="modal"
        data-bs-target={`#zdjecie${id}`}
      >
        Powiększ
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={onUsun}
      >
        Usuń
      </button>
    </div>
    </div>
  )
}

export default PhotoCard