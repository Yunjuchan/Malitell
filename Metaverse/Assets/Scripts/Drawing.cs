using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Drawing : MonoBehaviour
{
    public GameObject linePrefab;
    public RawImage drawingCanvas;
    public List<Image> buttonImages;

    private List<Vector2> points = new List<Vector2>();
    private LineRenderer lineRenderer;
    private EdgeCollider2D collider2D;
    private Color pendingColor; // 적용할 색상을 저장하기 위한 변수

    private void Start()
    {
        // 각 버튼에 대해 함수를 연결
        foreach (Image buttonImage in buttonImages)
        {
            Button button = buttonImage.GetComponent<Button>();
            button.onClick.AddListener(() => pendingColor = buttonImage.color); // 클릭된 버튼의 색상을 pendingColor에 저장
        }
    }

    private void CreateNewLine(Vector2 position)
    {
        GameObject go = Instantiate(linePrefab, drawingCanvas.transform);
        lineRenderer = go.GetComponent<LineRenderer>();
        collider2D = go.GetComponent<EdgeCollider2D>();

        points.Clear();
        points.Add(position);

        lineRenderer.positionCount = 1;
        lineRenderer.SetPosition(0, position);
        ApplyLineColor(pendingColor); // pendingColor에 저장된 색상을 새로운 라인에 적용
    }

    private void ApplyLineColor(Color color)
    {
        if (lineRenderer != null)
        {
            lineRenderer.startColor = color;
            lineRenderer.endColor = color;
        }
    }

    private void Update()
    {
        if (RectTransformUtility.RectangleContainsScreenPoint(drawingCanvas.rectTransform, Input.mousePosition, Camera.main))
        {
            Vector2 localCursor;
            RectTransformUtility.ScreenPointToLocalPointInRectangle(drawingCanvas.rectTransform, Input.mousePosition, Camera.main, out localCursor);

            if (Input.GetMouseButtonDown(0))
            {
                CreateNewLine(localCursor);
            }
            else if (Input.GetMouseButton(0))
            {
                points.Add(localCursor);
                lineRenderer.positionCount++;
                lineRenderer.SetPosition(lineRenderer.positionCount - 1, localCursor);
                collider2D.points = points.ToArray();
            }
        }

        if (Input.GetMouseButtonUp(0))
        {
            points.Clear();
        }
    }
}
