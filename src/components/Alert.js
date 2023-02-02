export default function ModalContent({ onClose }) {
  return (
    <div style={{ position: "absolute",top: "2px",right: "5px",zIndex: "1"}} className="alert alert-success  alert-dismissible fade show d-flex align-items-center" role="alert">
      <svg height={32} width={32} xmlns="http://www.w3.org/2000/svg" id="check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </svg>
      <div className="mx-2">
          Now successfully copy your article URL and share with others readers on social media.
      </div>
      <button onClick={onClose} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}