import React from "react";
import { Logo } from "../";
import { Link } from "react-router-dom";
import { Container } from "../";

export default function Footer() {
  return (
    <footer>
      <Container>
        <section className="relative overflow-hidden py-8">
          <div className="container relative z-10 mx-auto px-4">
            <div className="-m-8 flex flex-wrap items-center justify-between">
              <div className="w-auto p-8">
                <Link to="#">
                  <div className="inline-flex items-center">
                    <Logo />
                  </div>
                </Link>
              </div>
              <div className="w-auto p-8">
                <ul className="-m-5 flex flex-wrap items-center">
                  <li className="p-5">
                    <Link className="font-medium  hover:text-gray-700" to="#">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="p-5">
                    <Link className="font-medium  hover:text-gray-700" to="#">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="p-5">
                    <Link className="font-medium  hover:text-gray-700" to="#">
                      Return Policy
                    </Link>
                  </li>
                  <li className="p-5">
                    <Link className="font-medium  hover:text-gray-700" to="#">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
}
