using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Drawing : MonoBehaviour
{
    public GameObject linePrefab;
    public RawImage drawingCanvas;

    private List<Vector2> points = new List<Vector2>();
    private LineRenderer lineRenderer;
    private EdgeCollider2D collider2D;

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Vector2 localCursor;
            RectTransformUtility.ScreenPointToLocalPointInRectangle(drawingCanvas.rectTransform, Input.mousePosition, null, out localCursor);

            GameObject go = Instantiate(linePrefab, drawingCanvas.transform.parent); // RawImage의 부모(Transform)을 참조하여 생성
            lineRenderer = go.GetComponent<LineRenderer>();
            collider2D = go.GetComponent<EdgeCollider2D>();

            points.Clear();
            points.Add(localCursor);

            lineRenderer.positionCount = 1;
            lineRenderer.SetPosition(0, localCursor);
        }
        else if (Input.GetMouseButton(0))
        {
            Vector2 localCursor;
            RectTransformUtility.ScreenPointToLocalPointInRectangle(drawingCanvas.rectTransform, Input.mousePosition, null, out localCursor);

            points.Add(localCursor);
            lineRenderer.positionCount++;
            lineRenderer.SetPosition(lineRenderer.positionCount - 1, localCursor);
            collider2D.points = points.ToArray();
        }
        else if (Input.GetMouseButtonUp(0))
        {
            points.Clear();
        }
    }
}
