import React from "react";
import Button from '../elements/Button';

export default function  BrandIcon() {
    return (
        <Button
          className=""
          type="link"
          href="/"
        >
          <p className="text-theme-blue text-4xl font-medium ">
            Apparo
            <span className="text-theme-purple">tech</span>
          </p>
        </Button>
      );
}