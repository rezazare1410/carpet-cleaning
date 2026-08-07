"use client";

import { useEffect } from "react";

const toPersianDigits = (text) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";

  return text
    .replace(/[0-9]/g, (digit) => persianDigits[Number(digit)])
    .replace(/[٠-٩]/g, (digit) => {
      return persianDigits[arabicDigits.indexOf(digit)];
    });
};

export default function PersianDigits() {
  useEffect(() => {
    const excludedSelector =
      'script, style, code, pre, textarea, input, select, option, [contenteditable="true"]';

    const convertTextNode = (textNode) => {
      const parent = textNode.parentElement;

      if (!parent || parent.closest(excludedSelector)) {
        return;
      }

      const currentText = textNode.nodeValue;
      const convertedText = toPersianDigits(currentText);

      if (currentText !== convertedText) {
        textNode.nodeValue = convertedText;
      }
    };

    const convertElement = (element) => {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT
      );

      let textNode;

      while ((textNode = walker.nextNode())) {
        convertTextNode(textNode);
      }
    };

    convertElement(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          convertTextNode(mutation.target);
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            convertTextNode(node);
          }

          if (node.nodeType === Node.ELEMENT_NODE) {
            convertElement(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}