import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { InputBox } from "../Components/input-box/input";
import Sidebar from "../Components/sidebar";
import { useWidth } from "../hooks/useWidth";
import { Add } from "../icons/Icons";

const Layout = () => {
  const width = useWidth();
  const navigator = useNavigate();

  let [open, setOpen] = useState<boolean>();
  const onClose = (e: any) => {
    e.stopPropagation();
    setOpen(false);
  };

  if (width && open === undefined) {
    setOpen(width >= 1024);
  }

  useEffect(() => {
    if (width && width < 769) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);

  return (
    <>
      {width && width <= 768 && <Header setOpen={setOpen} />}
      <div className="wrapper">
        {width === undefined ? (
          <aside
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Sidebar />
          </aside>
        ) : (
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                exit={{ background: "rgba(255, 255, 255, 0)" }}
                className="overlay"
                onClick={onClose}
              >
                <motion.aside
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  variants={{
                    open: width >= 1024 ? { width: "261px" } : { x: "0%" },
                    closed: width >= 1024 ? { width: 0 } : { x: "-100%" },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                >
                  <button
                    className="create-new-chat"
                    onClick={() => navigator("/chat")}
                  >
                    <span>
                      <Add />
                    </span>
                    <span>New chat</span>
                  </button>
                  <Sidebar />
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <main>
          <div>
            <Outlet />
          </div>
          <InputBox />
        </main>
      </div>
    </>
  );
};

export default Layout;
