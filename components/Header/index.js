import React from "react";
import Button from "../Button";
const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  return (
    <div className="mt-6 flex items-center justify-between sticky top-0 z-10 bg-white">
      <img
        className="w-10 h-10"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAADQ0NDy8vLw8PAUFBT09PQXFxcODg4aGhrT09McHBzPz8/IyMgRERHMzMwhISHe3t4ICAgP7sMpAAADS0lEQVR4nO3djXbaMAyGYQyUdozSn/u/2NbbWMeMfIojWTrR+1yATjQl+cLiuJsNAAAAAAAAAAAAAAAAAAAAAAAAjDw/Ryyl6FjKUanUtpStUilFnw1qtXiqpcK1+KtBneM6/S6ldUIo+dOgxnGdLqVCTfFvg8uP60WvlKJ/Glw6xZNeKUXbUrSO6+W6VJApHkvRanH7f6kQLTZHNd7iqS0VoMVmguMt3vi3CtDizaMaa/Hmv5V7i0KDIy0qllIkHlUpd9eSSzlOUW7wcX93sf1DvBblBh/ub/CzxSexntOJKjf48zBU8PAYa4qdBneDJWOdqOoTrA6BWjSYYLUPc6J27qLjE6wO8u1maovC48en12UNbja7H2LtiXdUswlWuwBTlBtcPMGqM8VJLcqnqMIEq84Up5yoJjFxzTf6jWLimmf0T5hg5Rf9UyZYeUV/59eE5gQrn+iX76LKE6w8or8zQf0GPaJ/2jV4MTv65VP0bNPg7OifFBPXZkZ/52HbaoLVvOg3/TXRMyv6p99kvsyJfrnBs+0EqxnRPzXoW/bRPznoW9bR73gNXthGv0PQtyyj3yXoW3bR7xT0Lavodwv6lk30B7jJfLGIftegb+lHv3PQt7Sj3z3oW7rRH+oavNCM/hBB39KL/iBB39KK/jBB39KJ/kBB39KI/s77Qe8JVvvXpS0exALlzfbYv+lNPsBvnmKrn2GC6zDBvTRBHiZ4pknwXJrgt0WC34cJfuMHuxZtXtEEin6r12xhot/uVWmQ6Ld83R0i+m2XLAS43VgvO3GPfvulQ6t/B5zgPX6CtRgJ1tMkWBOVYF1bgrWJCdaXJlgjnGCd99To9/pMb/XfW0yLfs/PZadEv+8nzxOm6P3Zutzi+8hGAy3v7w/NT1T/b0h7LT4tbzHCd8DKW35ci/Etd/daXDbFKN/jd59ulkwxzp4KRtfi7hynwd5j+NPoFPehGuyeqGNTjDXBSp5iGdpj6F0s57YZVuc/Ngb2iQo3waozxbtryaVcd2wTW1zLfm0J9txLsG/izRbXtfdlgv1LmxbXtwet6j7CW71Sqla/F3SC/bwT7MmeYF/9BH8bIcHftwAAAAAAAAAAAAAAAAAAAAAAAFiHD9m6Ie94+jqUAAAAAElFTkSuQmCC"
        alt=""
      />
      <div>
        <Button onClick={handleWorkScroll}>Work</Button>
        <Button onClick={handleAboutScroll}>About</Button>
        <Button>Blog</Button>
        <Button
          onClick={() => window.open("mailto:abdullah.safayet11@gmail.com")}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header;
