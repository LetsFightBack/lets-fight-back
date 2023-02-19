import AnimatedPage from "../animations/animatedpage";

export default function MainPageWrapper({ children }) {
  return (
    <div>
      <AnimatedPage>
        {/* Navbar */}
        {children}
        {/* Footer */}
      </AnimatedPage>
    </div>
  );
}
